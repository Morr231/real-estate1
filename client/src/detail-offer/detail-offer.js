import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./detail-offer-sass/detail-offer.sass";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHouse,
    faRuler,
    faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

import h1 from "../houses/1 (1).jpg";
import h2 from "../houses/1 (2).jpg";
import h3 from "../houses/1 (3).jpg";
import h4 from "../houses/1 (4).jpg";
import h5 from "../houses/1 (5).jpg";
import h6 from "../houses/1 (6).jpg";
import h7 from "../houses/1 (7).jpg";
import h8 from "../houses/1 (8).jpg";
import h9 from "../houses/1 (9).jpg";
import h10 from "../houses/1 (10).jpg";
import h11 from "../houses/1 (11).jpg";
import h12 from "../houses/1 (12).jpg";
import h13 from "../houses/1 (13).jpg";
import h14 from "../houses/1 (14).jpg";
import h15 from "../houses/1 (15).jpg";
import h16 from "../houses/1 (16).jpg";
import h17 from "../houses/1 (17).jpg";
import h18 from "../houses/1 (18).jpg";
import h19 from "../houses/1 (19).jpg";

const DetailOffer = () => {
    const [cards, setCards] = useState([]);
    const { id } = useParams();

    const houses = [
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        h7,
        h8,
        h9,
        h10,
        h11,
        h12,
        h13,
        h14,
        h15,
        h16,
        h17,
        h18,
        h19,
    ];

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
                    <img
                        src={houses[pos]}
                        alt=""
                        className="detail-offer-main__image"
                    />
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
