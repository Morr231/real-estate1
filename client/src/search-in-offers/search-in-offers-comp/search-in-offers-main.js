import React, { useState } from "react";

import "../search-in-offers-sass/search-in-offers-main.sass";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchInOffersMain = ({ cards, setCards }) => {
    const handleSearch = (event) => {
        event.preventDefault();
        const tempCards = cards;
        const result = tempCards.filter((card) => {
            return (
                card.description
                    .toLowerCase()
                    .indexOf(event.target.search.value.toLowerCase()) !== -1
            );
        });
        console.log(result);
        setCards(result);
    };

    // async function searchFetch({ search }) {
    //     console.log(search);
    //     console.log(
    //         JSON.stringify({
    //             description: search,
    //             cost: "",
    //             location: "",
    //             type: "",
    //             size: "",
    //             text: "",
    //         })
    //     );
    //     const response = await fetch("http://localhost:8080/api/task/search", {
    //         method: "POST",
    //         body: JSON.stringify({
    //             description: search,
    //             cost: "",
    //             location: "",
    //             type: "",
    //             size: "",
    //             text: "",
    //         }),
    //         headers: {
    //             //"Content-Type": "application/search",
    //             Accept: "*/*",
    //         },
    //     });
    //     const data = await response.json();
    //     console.log(data);
    // }

    return (
        <div className="search-in-offers-main">
            <h2 className="search-in-offers-main-header">
                Search for an offer
            </h2>
            <div className="search-in-offers-main-description">
                Choose from the most advantageous offers
            </div>

            <div className="search-in-offers-main-container">
                <form
                    className="search-in-offers-main-container__form container"
                    onSubmit={handleSearch}
                >
                    <div className="search-in-offers-main-container__form_upper">
                        <input
                            type="text"
                            name="search"
                            className="search-in-offers-main-container__form_upper_text"
                            placeholder="Enter a keyword"
                        />

                        <FontAwesomeIcon
                            className="search-in-offers-main-container__form_upper_emoji_search"
                            icon={faSearch}
                        />
                        <input
                            type="submit"
                            className="search-in-offers-main-container__form_upper_button"
                        />
                    </div>

                    {/* <div className="search-in-offers-main-container__form_filter">
                        <select
                            name=""
                            id=""
                            className="search-in-offers-main-container__form_filter_select"
                        ></select>
                    </div> */}

                    {/* <div className="search-in-offers-main-container__form_ranges">
                        <input
                            type="range"
                            className="search-in-offers-main-container__form_range"
                            min="-50"
                            value="-30"
                            max="50"
                        />
                        <input
                            type="range"
                            className="search-in-offers-main-container__form_range"
                            min="-50"
                            value="-30"
                            max="20"
                        />
                    </div> */}
                </form>
            </div>
        </div>
    );
};

export default SearchInOffersMain;
