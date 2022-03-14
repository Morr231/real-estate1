import React, { useState, useEffect, useCallback, Component } from "react";
import { Link } from "react-router-dom";

import RealEstateCard from "../../real-estate-card/real-estate-card";
import "../search-in-offers-sass/search-in-offers-card.sass";

const SearchInOffersCards = () => {
    const [cards, setCards] = useState([]);

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
        return (
            <div className="search-in-offers-cards">
                {cards.map((card) => {
                    return (
                        <Link to={`/search-in-offers/${card["_id"]}`}>
                            <RealEstateCard
                                description={card.description}
                                price={card.price}
                                location={card.location}
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
