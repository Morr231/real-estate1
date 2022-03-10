import React from "react";

import RealEstateCard from "../../real-estate-card/real-estate-card";
import "../search-in-offers-sass/search-in-offers-card.sass";

const SearchInOffersCards = () => {
    addCardHandler();

    async function addCardHandler() {
        const response = await fetch("api/task", {
            headers: {
                "Content-Type": "application/all",
            },
        });
        const data = await response.json();
        console.log(data);
    }

    return (
        <div className="search-in-offers-cards">
            <RealEstateCard />
            <RealEstateCard />
            <RealEstateCard />

            <RealEstateCard />
            <RealEstateCard />
            <RealEstateCard />
        </div>
    );
};

export default SearchInOffersCards;