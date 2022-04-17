package models

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
	"gopkg.in/mgo.v2/bson"
)

type MongoImage struct {
	imageID bson.ObjectId `bson:"image_id"`
	Path    string        `bson:"path"`
}

type Text struct {
	Texti string `json:"texti,omitempty"`
}

type Object struct {
	HouseID     primitive.ObjectID `json:"house_id,omitempty" bson:"house_id,omitempty"`
	Name        string             `json:"name,omitempty"`
	Description string             `json:"description,omitempty"`
	Type        string             `json:"type,omitempty"`
	Cost        string             `json:"cost,omitempty"`
	Photo       []string           `json:"photo,omitempty"`
	Size        string             `json:"size,omitempty"`
	Location    string             `json:"location,omitempty"`
	Username    string             `json:"username,omitempty"`
	Surname     string             `json:"surname,omitempty"`
	Number      string             `json:"number,omitempty"`
	Email       string             `json:"email,omitempty"`
}
