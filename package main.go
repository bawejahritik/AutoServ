package main

import (
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

type UserDetails struct {
	gorm.Model
	CarNumber   string
	Name        string
	PhoneNumber uint
	Email       string
	Service     string
}

func main() {
	db, err := gorm.Open(sqlite.Open("ClientDetails.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	db.AutoMigrate(&UserDetails{})

	db.Create(&UserDetails{CarNumber: "ABC123", Name: "tester", PhoneNumber: 12345678, Email: "temp@email.com", Service: "maintenance"})

}
