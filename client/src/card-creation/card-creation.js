import React from "react";

import "./card-creation-sass/card-creation.sass";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const CardCreation = () => {
    const handleCard = (event) => {
        event.preventDefault();

        const allFiles = [];
        for (let i = 0; i < event.target.files.lenght; i++) {
            const formData = new FormData();
            formData.append("file", event.target.files[i]);
            allFiles.append(formData);
        }

        const user = {
            description: event.target.description.value,
            price: event.target.price.value,
            location: event.target.location.value,
            type: event.target.type.value,
            size: event.target.size.value,
            text: event.target.text.value,
            photo: allFiles,
        };

        addCardHandler(user);
    };

    async function addCardHandler(card) {
        const response = await fetch("http://localhost:8080/api/task/photo", {
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
                <div className="card-creation-form__all_container">
                    <div className="card-creation-form__container">
                        <label htmlFor="description">
                            Provide your description
                        </label>
                        <input
                            type="text"
                            name="description"
                            className="card-creation-form__text"
                        />
                        <label htmlFor="price">Provide your price</label>
                        <input
                            type="text"
                            name="price"
                            className="card-creation-form__text"
                        />
                        <label htmlFor="location">Provide your location</label>
                        <input
                            type="text"
                            name="location"
                            className="card-creation-form__text"
                        />
                    </div>

                    <div className="card-creation-form__container">
                        <label htmlFor="type">Provide your type</label>
                        <input
                            type="text"
                            name="type"
                            className="card-creation-form__text"
                        />
                        <label htmlFor="size">Provide your size</label>
                        <input
                            type="text"
                            name="size"
                            className="card-creation-form__text"
                        />
                        <label htmlFor="text">Provide your text</label>
                        <input
                            type="text"
                            name="text"
                            className="card-creation-form__text"
                        />
                    </div>
                </div>

                <label className="photoLabel" htmlFor="photo">
                    Provide your photo
                </label>

                <div class="wrapper">
                    <div class="file-upload">
                        <input type="file" name="image" />
                        <FontAwesomeIcon icon={faArrowUp} />
                    </div>
                </div>

                <input type="submit" className="card-creation-form__submit" />
            </form>
        </div>
    );
};

export default CardCreation;
