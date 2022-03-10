import React from "react";

import RealEstateCard from "../../real-estate-card/real-estate-card";
import "../search-in-offers-sass/search-in-offers-card.sass";

const SearchInOffersCards = () => {
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
