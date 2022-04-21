package main

import (
	"bytes"
	"encoding/json"
	"log"
	"net/http"
	"net/http/httptest"
	"os"
	"testing"
)

var a App

func TestMain(m *testing.M) {
	a.Initialize("sqlite", "testing.db")

	if err := a.DB.Migrator().HasTable("client_details"); err != true {
		log.Fatal(err)
	}

	if err := a.DB.Migrator().HasTable("user_details"); err != true {
		log.Fatal(err)
	}

	code := m.Run()

	a.DB.Migrator().DropTable("client_details")
	a.DB.Migrator().DropTable("user_details")

	os.Exit(code)

}

func TestGetNonExistentTrackingID(t *testing.T) {
	req, _ := http.NewRequest("GET", "http://localhost:8080/getClient?trackingID=123456", nil)
	w := httptest.NewRecorder()
	a.r.ServeHTTP(w, req)

	if want, got := http.StatusOK, w.Code; want == got {
		t.Fatalf("expected a %d, instead got: %d", want, got)
	}

}

func TestGetExistingTrackingID(t *testing.T) {

	var s ClientDetails

	s.TrackingID = "381539592"
	a.DB.Save(&s)

	req, _ := http.NewRequest("GET", "http://localhost:8080/getClient?trackingID=381539592", nil)

	w := httptest.NewRecorder()
	a.r.ServeHTTP(w, req)

	if want, got := http.StatusOK, w.Code; want != got {
		t.Fatalf("expected a %d, instead got: %d", want, got)
	}
}

func TestGetNonExistentUsername(t *testing.T) {
	req, _ := http.NewRequest("GET", "http://localhost:8080/checkUser?firstname=firstname&password=temp", nil)
	w := httptest.NewRecorder()
	a.r.ServeHTTP(w, req)

	if want, got := http.StatusOK, w.Code; want == got {
		t.Fatalf("expected a %d, instead got: %d", want, got)
	}
}

func TestGetExistingUsername(t *testing.T) {

	var u UserDetails

	u.FirstName = "backend"
	u.Password = "temp"
	a.DB.Save(&u)

	req, _ := http.NewRequest("GET", "http://localhost:8080/checkUser?firstname=backend&password=temp", nil)

	w := httptest.NewRecorder()
	a.r.ServeHTTP(w, req)

	if want, got := http.StatusOK, w.Code; want != got {
		t.Fatalf("expected a %d, instead got: %d", want, got)
	}
}

func TestIncorrectPassword(t *testing.T) {
	var u UserDetails

	u.FirstName = "backend"
	u.Password = "temp"
	a.DB.Save(&u)

	req, _ := http.NewRequest("GET", "http://localhost:8080/checkUser?firstname=backend&password=tempo", nil)

	w := httptest.NewRecorder()
	a.r.ServeHTTP(w, req)

	if want, got := http.StatusBadRequest, w.Code; want != got {
		t.Fatalf("expected a %d, instead got: %d", want, got)
	}

}

func TestCreateAppointment(t *testing.T) {

	var jsonStr = []byte(`
	{
		"appointmentDate": "11th November 2022",
		"email": "backend@test.com",
		"firstName": "backend",
		"lastName": "test",
		"phoneNumber": "12345",
		"registrationNumber": "12345678",
		"serviceType": "Interim"
	}`)

	req, _ := http.NewRequest("POST", "http://localhost:8080/stars", bytes.NewBuffer(jsonStr))
	req.Header.Set("Content-Type", "application/json")

	res := httptest.NewRecorder()
	a.r.ServeHTTP(res, req)

	if want, got := http.StatusCreated, res.Code; want != got {
		t.Fatalf("expected a %d, instead got: %d", want, got)
	}

	var m map[string]interface{}
	json.Unmarshal(res.Body.Bytes(), &m)

	if m["message"] != "Status Created" {
		t.Errorf("Expected message to be 'Status Created'. Got '%v'", m["message"])
	}
}

func TestCreateUser(t *testing.T) {

	var jsonStr = []byte(`
	{
		"email": "postman@email.com",
		"firstName": "firstname",
		"lastName": "test",
		"phoneNumber": "12345",
		"password": "temp"
	}`)

	req, _ := http.NewRequest("POST", "http://localhost:8080/registerUser", bytes.NewBuffer(jsonStr))
	req.Header.Set("Content-Type", "application/json")

	res := httptest.NewRecorder()
	a.r.ServeHTTP(res, req)

	if want, got := http.StatusCreated, res.Code; want != got {
		t.Fatalf("expected a %d, instead got: %d", want, got)
	}

	var m map[string]interface{}
	json.Unmarshal(res.Body.Bytes(), &m)

	if m["message"] != "Status Created" {
		t.Errorf("Expected message to be 'Status Created'. Got '%v'", m["message"])
	}
}

func TestUpdateAppointment(t *testing.T) {

	var client ClientDetails

	client.AppointmentDate = "28th August"
	client.TrackingID = "12345678"

	a.DB.Save(&client)

	var originalAppointment map[string]interface{}

	req, _ := http.NewRequest("GET", "http://localhost:8080/getClient?trackingID=381539592", nil)

	res := httptest.NewRecorder()
	a.r.ServeHTTP(res, req)

	json.Unmarshal(res.Body.Bytes(), &originalAppointment)

	var jsonStr = []byte(`{
		"trackingID":"102876649",
		"appointmentDate":"19th Sept"
	}}`)

	req, _ = http.NewRequest("PUT", "http://localhost:8080/updateClient", bytes.NewBuffer(jsonStr))
	req.Header.Set("Content-Type", "application/json")

	res = httptest.NewRecorder()
	a.r.ServeHTTP(res, req)

	var m map[string]interface{}

	json.Unmarshal(res.Body.Bytes(), &m)

	if m["message"] != "Status Updated" {
		t.Errorf("Expected message to be 'Status Created'. Got '%v'", m["message"])
	}
}

func TestDeleteAppointment(t *testing.T) {
	var client ClientDetails

	client.AppointmentDate = "28th August"
	client.TrackingID = "12345678"

	a.DB.Save(&client)

	req, _ := http.NewRequest("DELETE", "http://localhost:8080/deleteClient?trackingID=4567446831", nil)

	res := httptest.NewRecorder()
	a.r.ServeHTTP(res, req)

	var m map[string]interface{}

	json.Unmarshal(res.Body.Bytes(), &m)

	if m["message"] != "Status Deleted" {
		t.Errorf("Expected message to be 'Status Deleted'. Got '%v'", m["message"])
	}

}
