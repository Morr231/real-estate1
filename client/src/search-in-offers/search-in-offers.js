import React, { useState, useEffect } from "react";

import SearchInOffersMain from "./search-in-offers-comp/search-in-offers-main";
import SearchInOffersCards from "./search-in-offers-comp/search-in-offers-cards";

import "./search-in-offers-sass/search-in-offers.sass";

const SearchInOffers = () => {
    const [cards, setCards] = useState([]);

    return (
        <div className="search-in-offers">
            <SearchInOffersMain cards={cards} setCards={setCards} />
            <SearchInOffersCards cards={cards} setCards={setCards} />
        </div>
    );
};

export default SearchInOffers;
