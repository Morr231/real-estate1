package router

import (
	"github.com/gorilla/mux"
	//"real-estate1/middleware"

	"real-estate1/middleware"
)

// Router is exported and used in main.go
func Router() *mux.Router {

	router := mux.NewRouter()

	router.HandleFunc("/api/task/create", middleware.CreateRE).Methods("POST", "OPTIONS")
	router.HandleFunc("/api/task/all", middleware.GetAllCards).Methods("GET", "OPTIONS")
	router.HandleFunc("/api/task/photo", middleware.Photo).Methods("POST", "OPTIONS")
	router.HandleFunc("/api/task/photoOfObject", middleware.PhotoOfCard).Methods("POST", "OPTIONS")
	router.HandleFunc("/api/task/search", middleware.SearchCards).Methods("GET", "OPTIONS")
	/*file := os.Args[1] //os.Args[1] = testfile.zip
	filename := path.Base(file)
	middleware.UploadFile(file, filename)*/
	return router
	//dfd
}
