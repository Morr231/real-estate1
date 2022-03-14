import React, { useState } from "react";

import "../search-in-offers-sass/search-in-offers-main.sass";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchInOffersMain = () => {
    const submitHandler = (e) => {
        e.preventDefault();

        // setFile(e.target.file.value);
        const formData = new FormData();
        formData.append("file", e.target.files[0]);

        postData(formData);
    };

    async function postData(formData) {
        const response = await fetch("", {
            method: "POST",
            body: formData,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        });
    }

    return (
        <div className="search-in-offers-main">
            <h2 className="search-in-offers-main-header">
                Search for an offer
            </h2>
            <div className="search-in-offers-main-description">
                Choose from the most advantageous offers
            </div>

            <form>
                <input type="file" name="file" onChange={submitHandler} />
            </form>

            <div className="search-in-offers-main-container">
                <form className="search-in-offers-main-container__form container">
                    <div className="search-in-offers-main-container__form_upper">
                        <input
                            type="text"
                            className="search-in-offers-main-container__form_upper_text"
                            placeholder="Enter a keyword"
                        />

                        <FontAwesomeIcon
                            className="search-in-offers-main-container__form_upper_emoji_search"
                            icon={faSearch}
                        />
                        <button className="search-in-offers-main-container__form_upper_button">
                            Search
                        </button>
                    </div>

                    <div className="search-in-offers-main-container__form_filter">
                        <select
                            name=""
                            id=""
                            className="search-in-offers-main-container__form_filter_select"
                        ></select>
                    </div>

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
