package main

import (
	// "github.com/gorilla/mux"
	//"github.com/gin-gonic/gin"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
	// "log"
	// "net/http"
	// "os"
	//"path"
	//"path/filepath"
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
		panic(err.Error())
	}

	db.AutoMigrate(&UserDetails{})

	db.Create(&UserDetails{CarNumber: "12345", Name: "abcdef", PhoneNumber: 0123456, Email: "temp@email.com", Service: "Maintenance"})

	// r := gin.Default()
	// r.Use(CORSMiddleware())

	// r.NoRoute(func(c *gin.Context) {
	// 	dir, file := path.Split(c.Request.RequestURI)
	// 	ext := filepath.Ext(file)
	// 	if file == "" || ext == "" {
	// 		c.File("./front-end/src/index.html")
	// 	} else {
	// 		c.File("./front-end/src/" + path.Join(dir, file))
	// 	}
	// })

	// er := r.Run(":3000")
	// if err != nil {
	// 	panic(er)
	// }

	// app := App{
	// 	db: db,
	// 	r:  mux.NewRouter(),
	// }

	// app.start()

}

// func CORSMiddleware() gin.HandlerFunc {
// 	return func(c *gin.Context) {
// 		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
// 		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
// 		c.Writer.Header().Set("Access-Control-Allow-Methods", "DELETE, GET, OPTIONS, POST, PUT")

// 		if c.Request.Method == "OPTIONS" {
// 			c.AbortWithStatus(204)
// 			return
// 		}

// 		c.Next()
// 	}
// }
