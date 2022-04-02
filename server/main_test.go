package main

import (
	"os"
	"testing"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

const (
	dbURI = "sqlite"
)

func TestMain(m *testing.M) {
	_, err := gorm.Open(sqlite.Open(dbURI), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	os.Exit(m.Run())
}
