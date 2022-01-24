package main

import (
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

func main() {
	_, err := gorm.Open(sqlite.Open("ClientDetails.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

}
