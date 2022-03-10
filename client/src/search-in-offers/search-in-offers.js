import React from "react";

import SearchInOffersMain from "./search-in-offers-comp/search-in-offers-main";
import SearchInOffersCards from "./search-in-offers-comp/search-in-offers-cards";

import "./search-in-offers-sass/search-in-offers.sass";

const SearchInOffers = () => {
    return (
        <div className="search-in-offers">
            <SearchInOffersMain />
            <SearchInOffersCards />
        </div>
    );
};

export default SearchInOffers;
