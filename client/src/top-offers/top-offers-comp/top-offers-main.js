import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "../top-offers-sass/top-offers-main.sass";

import barcelona from "../top-offers-img/barcelona.png";
import madrid from "../top-offers-img/madrid.png";
import madrid_2 from "../top-offers-img/madrid_2.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import RealEstateCard from "../../real-estate-card/real-estate-card";

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

function TopOffersMain() {
    const [sliderValue, setSliderValue] = useState(0);
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

    const changeSliderValue = ({ plus = false, minus = false }) => {
        if (minus) {
            if (sliderValue - 1 != -1) {
                setSliderValue(sliderValue - 1);
            } else {
                setSliderValue(10);
            }
        } else if (plus) {
            if (sliderValue + 1 != 11) {
                setSliderValue(sliderValue + 1);
            } else {
                setSliderValue(0);
            }
        }
    };

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

    return (
        <div className="top-offers-main">
            <form className="top-offers-main__form">
                <input
                    className="top-offers-main__form_slider"
                    type="range"
                    min="0"
                    value={sliderValue}
                    max="10"
                    step="1"
                />
            </form>

            <div className="top-offers-main__buttons">
                <button
                    className="top-offers-main__buttons_left top-offers-main__button"
                    onClick={() => {
                        changeSliderValue({ minus: true });
                    }}
                >
                    <FontAwesomeIcon icon={faAngleLeft} />
                </button>
                <button
                    className="top-offers-main__buttons_right top-offers-main__button"
                    onClick={() => {
                        changeSliderValue({ plus: true });
                    }}
                >
                    <FontAwesomeIcon icon={faAngleRight} />
                </button>
            </div>

            <div className="top-offers-main__cards">
                {cards.map((card, index) => {
                    if (sliderValue <= index && index <= sliderValue + 2) {
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
                    }
                })}
            </div>
        </div>
    );
}

export default TopOffersMain;
