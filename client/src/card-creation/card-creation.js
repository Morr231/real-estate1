import React, {useState} from "react";

import "./card-creation-sass/card-creation.sass";

const CardCreation = () => {
    const allFiles =[];
    const photoSend = (event) => {
        const formData = new FormData();
        formData.append("file", event.target.files[0]);
        postData(formData);
    }

    async function postData(formData) {
        console.log(formData);
        const response = await fetch("http://localhost:8080/api/task/photo", {
            method: "POST",
            body: formData,
            headers: {
                // 'Content-Type': undefined,
                Accept: "*/*",
            },
        });
        const result= await response.json();
        console.log(result);
       allFiles.push(result);
        console.log(allFiles);
    }

    const handleCard = (event) => {
        event.preventDefault();
        console.log(allFiles)

        const user = {
            description: event.target.description.value,
            cost: event.target.price.value,
            location: event.target.location.value,
            type: event.target.type.value,
            size: event.target.size.value,
            text: event.target.text.value,
            photo: allFiles,
        };

        addCardHandler(user);
    };

    async function addCardHandler(card) {
        const response = await fetch("http://localhost:8080/api/task/create", {
            method: "POST",
            body: JSON.stringify(card),
            headers: {
                // "Content-Type": "application/card",
                Accept: "*/*",
            },
        });
        const data = await response.json();
        console.log(data);
    }
    return (
        <div className="card-creation">
            <form
                className="card-creation-form"
                onSubmit={handleCard}
                encType="multipart/form-data"
            >
                <input
                    type="file"
                    name="photo"
                    className="card-creation-form__file"
                    onChange={photoSend}
                />

                <input
                    type="text"
                    name="description"
                    className="card-creation-form__text"
                />
                <input
                    type="text"
                    name="price"
                    className="card-creation-form__text"
                />
                <input
                    type="text"
                    name="location"
                    className="card-creation-form__text"
                />

                <input
                    type="text"
                    name="type"
                    className="card-creation-form__text"
                />
                <input
                    type="text"
                    name="size"
                    className="card-creation-form__text"
                />
                <input
                    type="text"
                    name="text"
                    className="card-creation-form__text"
                />
                <input type="submit" />
            </form>
        </div>
    );
};

export default CardCreation;
