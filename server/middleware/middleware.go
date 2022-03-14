package middleware

import (
	"context"
	"encoding/json"
	"fmt"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"io/ioutil"
	"log"
	"net/http"
	"path"

	"real-estate1/models"
)

// DB connection string
// for localhost mongoDB
//const connectionString = "mongodb://localhost:27017"
const connectionString = "mongodb+srv://admin:admin@go-lorem.4d1eq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

// Database Name
const dbName = "real-estate"

var client *mongo.Client

// Collection namenp
const collName = "estate"

// collection object/instance
var collection *mongo.Collection

// create connection with mongo db
func init() {
	// Set client options
	var err error
	clientOptions := options.Client().ApplyURI(connectionString)

	// connect to MongoDB
	client, err = mongo.Connect(context.TODO(), clientOptions)

	if err != nil {
		log.Fatal(err)
	}

	// Check the connection
	err = client.Ping(context.TODO(), nil)

	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Connected to MongoDB!")

	collection = client.Database(dbName).Collection(collName)

	fmt.Println("Collection instance created!")
}

func Photo(w http.ResponseWriter, r *http.Request) {
	//w.Header().Set("Context-Type", "application/all")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	r.ParseMultipartForm(10 << 20)
	file, _, err := r.FormFile("file")
	if err != nil {
		fmt.Println("error while getting the File")
		fmt.Println(err)
		return
	}
	defer file.Close()
	tempFile, err := ioutil.TempFile("E:/real-estate/real-estate1", "upload-*.jpeg")
	if err != nil {
		fmt.Println(err)
	}
	defer tempFile.Close()
	fileBytes, err := ioutil.ReadAll(file)
	if err != nil {
		fmt.Println(err)
	}
	tempFile.Write(fileBytes)
	photo := models.MongoImage{
		Path: "\\" + path.Base(tempFile.Name()),
	}

	insertResult, err := collection.InsertOne(context.Background(), photo)
	if err != nil {
		log.Fatal(err)
	}
	json.NewEncoder(w).Encode(insertResult.InsertedID) // return the //mongodb ID of generated document
}

func GetAllCards(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Context-Type", "application/all")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	payload := getAllCards()
	json.NewEncoder(w).Encode(payload)
}

func CreateRE(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Context-Type", "application/card")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	var user models.Object
	_ = json.NewDecoder(r.Body).Decode(&user)
	insertOneRE(user)
	json.NewEncoder(w).Encode(user)
}

func getAllCards() []primitive.M {
	cur, err := collection.Find(context.Background(), bson.D{{}})
	if err != nil {
		log.Fatal(err)
	}

	var results []primitive.M
	for cur.Next(context.Background()) {
		var result bson.M
		e := cur.Decode(&result)
		if e != nil {
			log.Fatal(e)
		}
		// fmt.Println("cur..>", cur, "result", reflect.TypeOf(result), reflect.TypeOf(result["_id"]))
		results = append(results, result)

	}

	if err := cur.Err(); err != nil {
		log.Fatal(err)
	}

	cur.Close(context.Background())
	return results
}

func insertOneRE(user models.Object) {
	insertResult, err := collection.InsertOne(context.Background(), user)

	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Inserted a Single Record ", insertResult.InsertedID)
}
