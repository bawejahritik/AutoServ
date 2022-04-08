package main

import (
	"encoding/json"
	"fmt"
	"log"
	"time"

	"math/rand"
	"net/http"

	"strconv"

	"github.com/gorilla/mux"
	"github.com/rs/cors"
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
	CreatedAt          time.Time
	UpdatedAt          time.Time
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
}

func (a *App) CreateHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	var s ClientDetails
	err := json.NewDecoder(r.Body).Decode(&s)
	if err != nil {
		sendErr(w, http.StatusBadRequest, err.Error())
		return
	}

	v := rand.Intn(9999999999-1000000000) + 1000000000
	s.TrackingID = strconv.Itoa(v)
	s.CreatedAt = time.Now()
	s.UpdatedAt = time.Now()
	a.DB.Save(&s)
	resp := make(map[string]string)
	resp["message"] = "Status Created"
	resp["trackingID"] = s.TrackingID
	jsonResp, err := json.Marshal(resp)
	if err != nil {
		log.Fatalf("Error happened in JSON marshal. Err: %s", err)
	}
	w.Header().Add("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
	w.Write(jsonResp)
}

func (a *App) getClient(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	temp := r.URL.Query().Get("trackingID")
	fmt.Println(temp)
	var client ClientDetails
	err := a.DB.Where("tracking_id = ?", temp).First(&client).Error

	if err != nil {
		fmt.Println(err)
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	fmt.Println(client.FirstName)

	resp := make(map[string]string)
	resp["firstname"] = client.FirstName
	resp["lastname"] = client.LastName
	resp["phone_number"] = client.PhoneNumber
	resp["email"] = client.Email
	resp["registration_number"] = client.RegistrationNumber
	resp["service_type"] = client.ServiceType
	resp["appointment_date"] = client.AppointmentDate
	resp["tracking_id"] = client.TrackingID
	resp["created_at"] = client.CreatedAt.String()

	jsonResp, err := json.Marshal(resp)
	if err != nil {
		log.Fatalf("Error happened in JSON marshal. Err: %s", err)
	}
	w.Write(jsonResp)

}

func (a *App) deleteClient(w http.ResponseWriter, r *http.Request) {
	trackingID := r.URL.Query().Get("trackingID")
	fmt.Println(trackingID)

	var client ClientDetails

	err := a.DB.Where("tracking_id = ?", trackingID).Delete(&client).Error

	if err != nil {
		fmt.Println(err)
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	resp := make(map[string]string)
	resp["message"] = "Status Deleted"
	resp["trackingID"] = trackingID

	w.WriteHeader(http.StatusAccepted)
	jsonResp, err := json.Marshal(resp)
	if err != nil {
		log.Fatalf("Error happened in JSON marshal. Err: %s", err)
	}
	w.Write(jsonResp)
}

func (a *App) updateClient(w http.ResponseWriter, r *http.Request) {
	trackingID := r.URL.Query().Get("trackingID")
	appointmentDate := r.URL.Query().Get("appointmentDate")
	fmt.Println(trackingID)
	fmt.Println(appointmentDate)

	var client ClientDetails

	err := a.DB.Model(&client).Where("tracking_id = ?", trackingID).Update("appointment_date", appointmentDate).Error

	if err != nil {
		fmt.Println(err)
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	resp := make(map[string]string)
	resp["message"] = "Status Updated"
	resp["trackingID"] = trackingID

	w.WriteHeader(http.StatusAccepted)
	jsonResp, err := json.Marshal(resp)
	if err != nil {
		log.Fatalf("Error happened in JSON marshal. Err: %s", err)
	}
	w.Write(jsonResp)

}

func sendErr(w http.ResponseWriter, code int, message string) {
	resp, _ := json.Marshal(map[string]string{"error": message})
	http.Error(w, string(resp), code)
}

func main() {

	a := &App{}
	a.Initialize("sqlite", "ClientDetails.db")

	r := mux.NewRouter()

	c := cors.New(cors.Options{
		AllowedOrigins:   []string{"http://localhost:4200", "http://localhost:4200/AppointmentForm"},
		AllowCredentials: true,
		AllowedMethods:   []string{"GET", "DELETE", "POST", "PUT"},
	})

	handler := c.Handler(r)

	//r.HandleFunc("/", a.handler)
	//fmt.Println("called handler")
	r.HandleFunc("/stars", a.CreateHandler).Methods("POST")
	r.HandleFunc("/getClient", a.getClient).Methods("GET")
	r.HandleFunc("/deleteClient", a.deleteClient).Methods("DELETE")
	r.HandleFunc("/updateClient", a.updateClient).Methods("PUT")

	log.Fatal(http.ListenAndServe(":8080", handler))

}
