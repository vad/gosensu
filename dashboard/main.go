package main

import (
	"encoding/json"
	"flag"
	"fmt"
	"github.com/codegangsta/martini"
	"github.com/codegangsta/martini-contrib/auth"
	"github.com/codegangsta/martini-contrib/render"
	"github.com/vad/gosensu/base"
	"io/ioutil"
	"log"
	"net/http"
	"sync"
)

var (
	config  *base.SensuConfig
	apiHost string
)

func init() {
	var err error

	configFile := flag.String("config", "/etc/sensu/config.json", "Sensu configuration file")
	flag.Parse()

	config, err = base.Parse(*configFile)
	if err != nil {
		log.Fatal("Error reading configuration file ", configFile, ": ", err.Error())
	}
	apiHost = fmt.Sprintf("%s:%d", config.Api.Host, config.Api.Port)
}

func main() {
	client := &http.Client{}

	m := martini.Classic()
	m.Use(auth.Basic(config.Dashboard.User, config.Dashboard.Password))
	m.Use(render.Renderer("templates"))

	m.Get("/", func(r render.Render) {
		r.HTML(200, "index.tmpl", "")
	})

	m.Get("/all", func(w http.ResponseWriter) string {
		var wg sync.WaitGroup
		var mu sync.Mutex

		w.Header().Set("Content-Type", "application/json")

		routes := []string{"events", "checks", "clients", "stashes", "info"}
		outMap := make(map[string]interface{})

		for _, route := range routes {
			wg.Add(1)

			// route changes during loop iterations, passing it as an argument we avoid a race condition
			go (func(route string) {
				defer wg.Done()

				clientRes, err := client.Get("http://" + apiHost + "/" + route)

				if err != nil {
					fmt.Println("Error getting ", route)
					return
				}
				defer clientRes.Body.Close()

				var d interface{}
				content, readErr := ioutil.ReadAll(clientRes.Body)
				if readErr != nil {
					fmt.Println("Error reading ", route)
					return
				}
				if jsonErr := json.Unmarshal(content, &d); jsonErr != nil {
					fmt.Println("Error unmarshalling ", route, string(content), ": ", jsonErr.Error())
					return
				}

				mu.Lock()
				defer mu.Unlock()
				outMap[route] = d
			})(route)
		}
		wg.Wait()

		info, ok := outMap["info"].(map[string]interface{})
		if ok {
			dm := make(map[string]interface{})
			dm["version"] = "0.10.2go"
			dm["poll_frequency"] = 10
			info["sensu_dashboard"] = dm
		}

		out, _ := json.Marshal(&outMap)
		return string(out)
	})

	m.Get("/.*", func(w http.ResponseWriter, req *http.Request) (int, string) {
		w.Header().Set("Content-Type", "application/json")

		req.URL.Host = apiHost
		req.URL.Scheme = "http"
		req.RequestURI = ""
		clientRes, err := client.Do(req)

		if err != nil {
			if req.URL.Path == "/info" {
				return 404, "{}"
			} else {
				return 404, "[]"
			}
		}
		defer clientRes.Body.Close()

		out, _ := ioutil.ReadAll(clientRes.Body)
		return clientRes.StatusCode, string(out)
	})

	proxyOr502 := func(w http.ResponseWriter, req *http.Request) (int, string) {
		w.Header().Set("Content-Type", "application/json")

		req.URL.Host = apiHost
		req.URL.Scheme = "http"
		req.RequestURI = ""
		clientRes, err := client.Do(req)

		if err != nil {
			out, _ := json.Marshal(&map[string]string{"error": err.Error()})
			return 502, string(out)
		}
		defer clientRes.Body.Close()

		out, _ := ioutil.ReadAll(clientRes.Body)
		return clientRes.StatusCode, string(out)
	}

	m.Post("/.*", proxyOr502)

	m.Delete("/.*", proxyOr502)

	http.ListenAndServe(fmt.Sprintf(":%d", config.Dashboard.Port), m)
}
