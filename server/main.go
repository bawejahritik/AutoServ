package main

func main() {
	a := &App{}
	a.Initialize("sqlite", "ClientDetails.db")
	a.Run(":8080")
}
