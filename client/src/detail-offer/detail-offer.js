import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./detail-offer-sass/detail-offer.sass";

const DetailOffer = () => {
    const [cards, setCards] = useState([]);
    const { id } = useParams();
    let [card, setCard] = useState(-1);

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

    if (cards.length != 0) {
        let pos = 0;

        for (let i = 0; i < cards.length; i++) {
            if (cards[i]["_id"] == id) {
                pos = i;
            }
        }
        return (
            <div className="detail-offer">
                <h1 className="detail-offer-main">
                    {cards[pos]["description"]}
                </h1>

                <img src="" alt="" className="detail-offer-main__image" />

                <div className="detail-offer-carousel"></div>

                <div className="detail-offer-information"></div>

                <div className="detail-offer-description"></div>
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
