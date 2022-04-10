package main

import App "github.com/bawejahritik/AutoServ/app"

func main() {
	a := &App.App{}
	a.Initialize("sqlite", "ClientDetails.db")
	a.Run(":8080")
}
