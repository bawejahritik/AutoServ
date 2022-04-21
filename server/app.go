package main

import (
	"encoding/json"
	"fmt"
	"log"
	"math/rand"
	"net/http"
	"strconv"
	"time"

	"github.com/gorilla/mux"
	"github.com/rs/cors"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

type App struct {
	DB *gorm.DB
	r  *mux.Router
}

func (a *App) Initialize(dbDriver string, dbURI string) {
	db, err := gorm.Open(sqlite.Open(dbURI), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}
	a.DB = db
	// Migrate the schema.
	a.DB.AutoMigrate(&ClientDetails{})
	a.DB.AutoMigrate(&UserDetails{})
	fmt.Println("initiated db")

	a.r = mux.NewRouter()

	a.initializeRoutes()
}

func (a *App) CreateHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	var s ClientDetails
	err := json.NewDecoder(r.Body).Decode(&s)
	if err != nil {
		sendErr(w, http.StatusBadRequest, err.Error())
		return
	}

	x1 := rand.NewSource(time.Now().UnixNano())
	y1 := rand.New(x1)
	s.TrackingID = strconv.Itoa(y1.Intn(1000000000))
	s.CreatedAt = time.Now()
	s.UpdatedAt = time.Now()

	min := 1
	max := 5
	temp := rand.Intn(max-min) + min
	s.Status = strconv.Itoa(temp)

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
	var client ClientDetails
	err := a.DB.Where("tracking_id = ?", temp).First(&client).Error

	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		resp := make(map[string]string)
		resp["error"] = "Tracking ID not found"
		jsonResp, err := json.Marshal(resp)
		if err != nil {
			log.Fatalf("Error happened in JSON marshal. Err: %s", err)
		}
		w.Write(jsonResp)
		return
	}

	resp := make(map[string]string)
	resp["firstname"] = client.FirstName
	resp["lastname"] = client.LastName
	resp["phone_number"] = client.PhoneNumber
	resp["email"] = client.Email
	resp["registration_number"] = client.RegistrationNumber
	resp["service_type"] = client.ServiceType
	resp["appointment_date"] = client.AppointmentDate
	resp["tracking_id"] = client.TrackingID
	resp["status"] = client.Status
	resp["created_at"] = client.CreatedAt.String()

	jsonResp, err := json.Marshal(resp)
	if err != nil {
		log.Fatalf("Error happened in JSON marshal. Err: %s", err)
	}
	w.Write(jsonResp)

}

func (a *App) deleteClient(w http.ResponseWriter, r *http.Request) {
	trackingID := r.URL.Query().Get("trackingID")

	var client ClientDetails

	err := a.DB.Where("tracking_id = ?", trackingID).Delete(&client).Error

	if err != nil {
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

	var s ClientDetails
	e := json.NewDecoder(r.Body).Decode(&s)
	if e != nil {
		sendErr(w, http.StatusBadRequest, e.Error())
		return
	}

	var client ClientDetails

	err := a.DB.Model(&client).Where("tracking_id = ?", s.TrackingID).Update("appointment_date", s.AppointmentDate).Error

	if err != nil {
		log.Fatalf("Error happened in find. Err: %s", err)
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	resp := make(map[string]string)
	resp["message"] = "Status Updated"
	resp["trackingID"] = s.TrackingID

	w.WriteHeader(http.StatusAccepted)
	jsonResp, err := json.Marshal(resp)
	if err != nil {
		log.Fatalf("Error happened in JSON marshal. Err: %s", err)
	}
	w.Write(jsonResp)

}

func (a *App) createUser(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	var u UserDetails
	err := json.NewDecoder(r.Body).Decode(&u)
	if err != nil {
		sendErr(w, http.StatusBadRequest, err.Error())
		return
	}

	a.DB.Save(&u)
	resp := make(map[string]string)
	resp["message"] = "Status Created"
	jsonResp, err := json.Marshal(resp)
	if err != nil {
		log.Fatalf("Error happened in JSON marshal. Err: %s", err)
	}
	w.Header().Add("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
	w.Write(jsonResp)
}

func (a *App) checkUser(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	uname := r.URL.Query().Get("firstname")
	pass := r.URL.Query().Get("password")

	var user UserDetails
	err := a.DB.Where("first_name = ?", uname).First(&user).Error

	if err != nil {
		fmt.Println(err)
		w.WriteHeader(http.StatusBadRequest)
		resp := make(map[string]string)
		resp["error"] = "username not found"
		jsonResp, err := json.Marshal(resp)
		if err != nil {
			log.Fatalf("Error happened in JSON marshal. Err: %s", err)
		}
		w.Write(jsonResp)
		return
	}

	resp := make(map[string]string)

	if user.Password == pass {
		resp["status"] = "valid"
	} else {
		resp["status"] = "invalid"
		w.WriteHeader(http.StatusBadRequest)
	}

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

func (a *App) Run(addr string) {

	c := cors.New(cors.Options{
		AllowedOrigins:   []string{"http://localhost:4200", "http://localhost:4200/AppointmentForm"},
		AllowCredentials: true,
		AllowedMethods:   []string{"GET", "DELETE", "POST", "PUT"},
	})

	handler := c.Handler(a.r)
	log.Fatal(http.ListenAndServe(":8080", handler))
}
