package main

import (
	"fmt"

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

	var user UserDetails

	fmt.Scan(&user.Name)
	fmt.Scan(&user.PhoneNumber)
	fmt.Scan(&user.Email)
	fmt.Scan(&user.CarNumber)
	fmt.Scan(&user.Service)

	db.AutoMigrate(&UserDetails{})

	db.Create(&UserDetails{Name: "tester", PhoneNumber: 12345678, Email: "temp@email.com", CarNumber: "ABC123", Service: "maintenance"})
	db.Create(&UserDetails{Name: user.Name, PhoneNumber: user.PhoneNumber, Email: user.Email, CarNumber: user.CarNumber, Service: user.Service})

}
