A Golang clone of the [Sensu](http://sensuapp.org/) dashboard. Lightweight.

Get and run
-----------

```
go get github.com/vad/gosensu
cd $GOPATH/src/github.com/vad/gosensu/dashboard
go run main.go
```

I will provide compiled packages ASAP (I need to find out what's the best way to build them, please write me if you know!)

Why
---

At the same time i had a small issue, and a solution without a real problem:

* a micro EC2 (600MB memory) instance running out of RAM, and with 100MB used by the ruby version of the sensu dashboard
* the [martini](https://github.com/codegangsta/martini) framework is really cool!

Instead of upgrading to a small EC2 instance, I choose to reinvent the wheel and wrote this clone.

What
----

The sensu dashboard is just 250 lines of ruby and tons of javascript and CSS (i suppose, never looked at them). Ruby code is just a proxy over the sensu API and it serves static files.

I just did a cp of the static files, and wrote 150 lines of Go to replace the server. It should just work.

... and it's light! It consumes 5MB of RAM instead of 100MB!
