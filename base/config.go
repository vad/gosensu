package base

import (
	"encoding/json"
	"io/ioutil"
	"os"
)

type SensuConfigApi struct {
	Host string `json:"host"`
	Port int    `json:"port"`
}

type SensuConfigDashboard struct {
	Host     string `json:"host"`
	Port     int    `json:"port"`
	User     string `json:"user"`
	Password string `json:"password"`
}

type SensuConfig struct {
	Api       *SensuConfigApi       `json:"api"`
	Dashboard *SensuConfigDashboard `json:"dashboard"`
}

func Parse(cf string) (config *SensuConfig, err error) {
	f, err := os.Open(cf)

	if err != nil {
		return
	}
	defer f.Close()

	fContent, err := ioutil.ReadAll(f)
	if err != nil {
		return
	}

	config = new(SensuConfig)
	if err = json.Unmarshal(fContent, config); err != nil {
		return
	}
	return
}
