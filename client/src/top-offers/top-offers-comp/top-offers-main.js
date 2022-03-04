import "../top-offers-sass/top-offers-main.sass";

import barcelona from "../top-offers-img/barcelona.png";
import madrid from "../top-offers-img/madrid.png";
import madrid_2 from "../top-offers-img/madrid_2.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import RealEstateCard from "../../real-estate-card/real-estate-card";

function TopOffersMain() {
    const handleCard = (event) => {
        event.preventDefault();

        const user = {
            description: event.target.description.value,
            price: event.target.price.value,
            location: event.target.location.value,
        };

        addCardHandler(user);
    };

    async function addCardHandler(card) {
        const response = await fetch("", {
            method: "POST",
            body: JSON.stringify(card),
            headers: {
                "Content-Type": "application/card",
            },
        });
        const data = await response.json();
        console.log(data);
    }

    return (
        <div className="top-offers-main">
            <form className="top-offers-main__form">
                <input className="top-offers-main__form_slider" type="range" />
            </form>

            <form onSubmit={(e) => handleCard(e)}>
                <input type="text" name="description" />
                <input type="text" name="price" />
                <input type="text" name="location" />
                <input type="submit" />
            </form>

            <div className="top-offers-main__buttons">
                <button className="top-offers-main__buttons_left top-offers-main__button">
                    <FontAwesomeIcon icon={faAngleLeft} />
                </button>
                <button className="top-offers-main__buttons_right top-offers-main__button">
                    <FontAwesomeIcon icon={faAngleRight} />
                </button>
            </div>

            <div className="top-offers-main__cards">
                <RealEstateCard
                    image={barcelona}
                    description={
                        "Large 4-room apartment with a beautiful terrace"
                    }
                    price={"320 000€"}
                    location={"Barcelona IX."}
                />

                <RealEstateCard
                    image={madrid}
                    description={"5i large design apartment with terrace"}
                    price={"280 000€"}
                    location={"Madrid VI."}
                />

                <RealEstateCard
                    image={madrid_2}
                    description={"3-room apartment with a beautiful terrace"}
                    price={"350 000€"}
                    location={"Madrid II."}
                />
            </div>
        </div>
    );
}

export default TopOffersMain;
