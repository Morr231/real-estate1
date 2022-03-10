package router

import (
	"github.com/gorilla/mux"

	//"real-estate1/middleware"

	"real-estate1/middleware"
)

// Router is exported and used in main.go
func Router() *mux.Router {

	router := mux.NewRouter()

	router.HandleFunc("/api/task", middleware.CreateRE).Methods("POST", "OPTIONS")
	router.HandleFunc("/api/task/all", middleware.GetAllCards).Methods("GET", "OPTIONS")
	return router
	//dfd
}
