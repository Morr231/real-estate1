import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./detail-offer-sass/detail-offer.sass";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHouse,
    faRuler,
    faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const DetailOffer = () => {
    const [cards, setCards] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const allCardsHandler = async () => {
            const response = await fetch("http://localhost:8080/api/task/all", {
                headers: {
                    "Content-Type": "application/card",
                },
            });
            const data = await response.json();
            setCards(data);
        };

        allCardsHandler();
    }, []);

    async function postData(index) {
        console.log(cards[index].photo);
        const response = await fetch("http://localhost:8080/api/task/photo", {
            method: "POST",
            body: cards[index].photo,
            headers: {
                // 'Content-Type': undefined,
                Accept: "*/*",
            },
        });
        console.log(response);
        const result = JSON.parse(JSON.stringify(response));
        console.log(result);
    }

    if (cards.length != 0) {
        let pos = 0;

        for (let i = 0; i < cards.length; i++) {
            if (cards[i]["_id"] == id) {
                pos = i;
            }
        }

        postData(pos);

        return (
            <div className="detail-offer">
                <h1 className="detail-offer-main">
                    {cards[pos]["description"]}
                </h1>

                <div className="detail-offer-main__image_container">
                    <img src="" alt="" className="detail-offer-main__image" />
                </div>

                <div className="detail-offer-carousel"></div>

                <div className="detail-offer-information">
                    <div className="detail-offer-information__container">
                        <FontAwesomeIcon
                            className="detail-offer-information__container_emoji"
                            icon={faHouse}
                        />
                        <div className="detail-offer-information__container_text">
                            {cards[pos]["type"]}
                        </div>
                    </div>

                    <div className="detail-offer-information__container">
                        <FontAwesomeIcon
                            className="detail-offer-information__container_emoji"
                            icon={faRuler}
                        />
                        <div className="detail-offer-information__container_text">
                            {cards[pos]["size"]}
                        </div>
                    </div>

                    <div className="detail-offer-information__container">
                        <FontAwesomeIcon
                            className="detail-offer-information__container_emoji"
                            icon={faMapMarkerAlt}
                        />
                        <div className="detail-offer-information__container_text">
                            {cards[pos]["location"]}
                        </div>
                    </div>
                </div>

                <div className="detail-offer-description">
                    {cards[pos]["text"]}
                </div>
            </div>
        );
    }
    return (
        <div className="detail-offer">
            <h1>Hello world</h1>
        </div>
    );
};

export default DetailOffer;
