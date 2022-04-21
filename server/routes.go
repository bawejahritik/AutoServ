package main

func (a *App) initializeRoutes() {
	a.r.HandleFunc("/stars", a.CreateHandler).Methods("POST")
	a.r.HandleFunc("/getClient", a.getClient).Methods("GET")
	a.r.HandleFunc("/deleteClient", a.deleteClient).Methods("DELETE")
	a.r.HandleFunc("/updateClient", a.updateClient).Methods("PUT")
	a.r.HandleFunc("/registerUser", a.createUser).Methods("POST")
	a.r.HandleFunc("/checkUser", a.checkUser).Methods("GET")
}
