package main

import (
	"time"

	"gorm.io/gorm"
)

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
	Status             string `json:"status"`
	CreatedAt          time.Time
	UpdatedAt          time.Time
}
