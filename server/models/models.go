package models

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
	"gopkg.in/mgo.v2/bson"
)

type Test struct {
	ID   primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	Text string             `json:"text,omitempty"`
}

type User struct {
	UserId  primitive.ObjectID `json:"user_id,omitempty" bson:"user_id,omitempty"`
	Name    string             `json:"name,omitempty"`
	Surname string             `json:"surname,omitempty"`
	Number  string             `json:"number,omitempty"`
	Email   string             `json:"email,omitempty"`
}

type MongoImage struct {
	imageID bson.ObjectId `bson:"image_id"`
	FileID  bson.ObjectId `bson:"fileID"`
	Name    string        `bson:"name"`
}

type Object struct {
	HouseID     primitive.ObjectID `json:"house_id,omitempty" bson:"house_id,omitempty"`
	Name        string             `json:"name,omitempty"`
	Description string             `json:"description,omitempty"`
	Type        string             `json:"type,omitempty"`
	Cost        string             `json:"cost,omitempty"`
	Photo       MongoImage         `json:"photo,omitempty"`
	Size        string             `json:"size,omitempty"`
	Location    string             `json:"location,omitempty"`
	Seller      User               `json:"seller,omitempty"`
}
