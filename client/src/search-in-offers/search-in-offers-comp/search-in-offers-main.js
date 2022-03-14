import React, { useState } from "react";

import "../search-in-offers-sass/search-in-offers-main.sass";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchInOffersMain = () => {
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(e.target.files)
        // setFile(e.target.file.value);
        const formData = new FormData();
        formData.append("file", e.target.files[0]);

        postData(formData);
    };

    async function postData(formData) {
        console.log(formData);
        const response = await fetch("http://localhost:8080/api/task/photo", {
            method: "POST",
            body: formData,
            headers: {
                // 'Content-Type': undefined,
                'Accept': '*/*',
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

<<<<<<< HEAD
            <form>
=======
            <form encType="multipart/form-data">
>>>>>>> d3a2e7889ae27ecc25109a231d08252244ce01e6
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
