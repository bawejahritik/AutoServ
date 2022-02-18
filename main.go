package main

import (
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
	gorm.Model
	AppointmentDate    string `json:"appointmentDate"`
	PhoneNumber        string `json:"phoneNumber"`
	Email              string `json:"email"`
	RegistrationNumber string `json:"registrationNumber"`
	ServiceType        string `json:"serviceType"`
	URL                string `json:"url"`
	TrackingID         string `json:"trackingID"`
	FirstName          string `json:"firstName"`
	LastName           string `json:"lastName"`
}

func (a *App) Initialize(dbDriver string, dbURI string) {
	db, err := gorm.Open(sqlite.Open(dbURI), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}
	a.DB = db

	// Migrate the schema.
	a.DB.AutoMigrate(&ClientDetails{})
	fmt.Println("initiated db")
	a.DB.Create(&ClientDetails{
		AppointmentDate:    "12th feb",
		PhoneNumber:        "12345",
		Email:              "test@email.com",
		RegistrationNumber: "12345",
		ServiceType:        "interim",
		URL:                "test",
		TrackingID:         "123456",
		FirstName:          "test",
		LastName:           "test",
	})
}

func (a *App) handler(w http.ResponseWriter, r *http.Request) {
	// Create a test Star.
	//a.DB.Create(&ClientDetails{FirstName: "test"})
	fmt.Println("inside handler")

	a.DB.Create(&ClientDetails{
		AppointmentDate:    "13th feb",
		PhoneNumber:        "12345",
		Email:              "test@email.com",
		RegistrationNumber: "12345",
		ServiceType:        "interim",
		URL:                "test",
		TrackingID:         "123456",
		FirstName:          "test",
		LastName:           "test",
	})

	// Read from DB.
	//var contact ClientDetails
	//a.DB.First(&contact, "FirstName = ?", "test")

	// Write to HTTP response.
	w.WriteHeader(200)
	//w.Write([]byte(contact.FirstName))

	// Delete.
	//a.DB.Delete(&contact)
}

func (a *App) CreateHandler(w http.ResponseWriter, r *http.Request) {
	// Parse the POST body to populate r.PostForm.

	if err := r.ParseForm(); err != nil {
		panic("failed in ParseForm() call")
	}

	fmt.Println("inside create")

	// Create a new star from the request body.
	star := &ClientDetails{
		URL:                "http://localhost:8080/",
		FirstName:          r.PostFormValue("firstName"),
		LastName:           r.PostFormValue("lastName"),
		PhoneNumber:        r.PostFormValue("phoneNumber"),
		Email:              r.PostFormValue("email"),
		RegistrationNumber: r.PostFormValue("registrationNumber"),
		ServiceType:        r.PostFormValue("serviceType"),
		AppointmentDate:    r.PostFormValue("appointmentDate"),
		TrackingID:         "1234567890",
	}
	a.DB.Create(star)
	fmt.Println("Initiated ", star.FirstName)

	// Form the URL of the newly created star.
	u, err := url.Parse(fmt.Sprintf("/ClientDetails/%s", star.FirstName))
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
	fmt.Println("called handler")
	r.HandleFunc("/stars", a.CreateHandler).Methods("POST")

	http.Handle("/", r)
	if err := http.ListenAndServe(":8080", nil); err != nil {
		panic(err)
	}

}
