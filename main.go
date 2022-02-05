package main

import (
	//"encoding/json"
	"fmt"
	"net/http"
	"net/url"

	"github.com/gorilla/mux"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

type App struct {
	DB *gorm.DB
}

type ClientDetails struct {
	Name        string `json: "Name"`
	PhoneNumber string `json: "PhoneNumber"`
	Email       string `json: "Email"`
	CarNumber   string `json: "CarNumber"`
	Service     string `json: "Service"`
	URL         string `json: "url"`
}

func (a *App) Initialize(dbDriver string, dbURI string) {
	db, err := gorm.Open(sqlite.Open(dbURI), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}
	a.DB = db

	// Migrate the schema.
	a.DB.AutoMigrate(&ClientDetails{})
}

func (a *App) handler(w http.ResponseWriter, r *http.Request) {
	// Create a test Star.
	a.DB.Create(&ClientDetails{Name: "test"})

	// Read from DB.
	var contact ClientDetails
	a.DB.First(&contact, "name = ?", "test")

	// Write to HTTP response.
	w.WriteHeader(200)
	w.Write([]byte(contact.Name))

	// Delete.
	a.DB.Delete(&contact)
}

func (a *App) CreateHandler(w http.ResponseWriter, r *http.Request) {
	// Parse the POST body to populate r.PostForm.
	if err := r.ParseForm(); err != nil {
		panic("failed in ParseForm() call")
	}

	// Create a new star from the request body.
	star := &ClientDetails{
		Name:        r.PostFormValue("Name"),
		PhoneNumber: r.PostFormValue("PhoneNumber"),
		Email:       r.PostFormValue("Email"),
		CarNumber:   r.PostFormValue("CarNumber"),
		Service:     r.PostFormValue("Service"),
		URL:         "http://localhost:8080/",
	}
	a.DB.Create(star)

	// Form the URL of the newly created star.
	u, err := url.Parse(fmt.Sprintf("/ClientDetails/%s", star.Name))
	if err != nil {
		panic("failed to form new Star URL")
	}
	base, err := url.Parse(r.URL.String())
	if err != nil {
		panic("failed to parse request URL")
	}

	// Write to HTTP response.
	w.Header().Set("Location", base.ResolveReference(u).String())
	w.WriteHeader(201)
}

func main() {

	a := &App{}
	a.Initialize("sqlite", "ClientDetails.db")

	r := mux.NewRouter()

	r.HandleFunc("/", a.handler)
	r.HandleFunc("/stars", a.CreateHandler).Methods("POST")

	http.Handle("/", r)
	if err := http.ListenAndServe(":8080", nil); err != nil {
		panic(err)
	}

}
