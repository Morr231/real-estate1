import React, { useState, useEffect, useCallback, Component } from "react";
import { Link } from "react-router-dom";

import RealEstateCard from "../../real-estate-card/real-estate-card";
import "../search-in-offers-sass/search-in-offers-card.sass";

import h1 from "../../houses/1 (1).jpg";
import h2 from "../../houses/1 (2).jpg";
import h3 from "../../houses/1 (3).jpg";
import h4 from "../../houses/1 (4).jpg";
import h5 from "../../houses/1 (5).jpg";
import h6 from "../../houses/1 (6).jpg";
import h7 from "../../houses/1 (7).jpg";
import h8 from "../../houses/1 (8).jpg";
import h9 from "../../houses/1 (9).jpg";
import h10 from "../../houses/1 (10).jpg";
import h11 from "../../houses/1 (11).jpg";
import h12 from "../../houses/1 (12).jpg";
import h13 from "../../houses/1 (13).jpg";
import h14 from "../../houses/1 (14).jpg";
import h15 from "../../houses/1 (15).jpg";
import h16 from "../../houses/1 (16).jpg";
import h17 from "../../houses/1 (17).jpg";
import h18 from "../../houses/1 (18).jpg";
import h19 from "../../houses/1 (19).jpg";

const SearchInOffersCards = () => {
    const [cards, setCards] = useState([]);
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
        return result;
    }

    if (cards.length != 0) {
        const results = [];

        for (let i = 0; i < cards.length; i++) {
            results.push(postData(i));
        }

        console.log(results);

        return (
            <div className="search-in-offers-cards">
                {cards.map((card, index) => {
                    return (
                        <Link to={`/search-in-offers/${card["_id"]}`}>
                            <RealEstateCard
                                description={card.description}
                                price={card.price}
                                location={card.location}
                                image={houses[index]}
                            />
                        </Link>
                    );
                })}
            </div>
        );
    } else {
        return (
            <div className="search-in-offers-cards">
                <h1>Hello world</h1>
            </div>
        );
    }
};

export default SearchInOffersCards;
