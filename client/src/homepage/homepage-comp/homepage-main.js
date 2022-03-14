import React from "react";
import "../homepage-sass/homepage-main.sass";

import home from "../homepage-img/home.png";
import homeDots from "../homepage-img/dotsBg.png";
import homeBg from "../homepage-img/home-blue.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faSearch } from "@fortawesome/free-solid-svg-icons";

const HomepageMain = () => {
    return (
        <div className="homepage-main">
            <div className="homepage-main__left">
                <h1 className="homepage-main__text">
                    Modern living <br /> for everyone <br />
                    A-dil building
                </h1>
                <div className="homepage-main__text_under">
                    We provide a complete service for the sale, purchase or
                    rental of real estate. We have been operating in Madrid and
                    Barcelona more than 15 years.
                </div>

                {/* <div className="homepage-main__search_container">
                    <form className="homepage-main__search_form">
                        <FontAwesomeIcon
                            className="homepage-main__search_form_emoji_location"
                            icon={faMapMarkerAlt}
                        />
                        <input
                            className="homepage-main__search_form_input"
                            type="text"
                            placeholder="Search of location"
                        />

                        <FontAwesomeIcon
                            className="homepage-main__search_form_emoji_search"
                            icon={faSearch}
                        />
                        <button className="homepage-main__search_form_button">
                            Search
                        </button>
                    </form>
                </div> */}
            </div>

            <div className="homepage-main__right">
                <div className="homepage-main__image_container">
                    <img
                        src={home}
                        alt="home-image"
                        className="homepage-main__image"
                    />
                    <img
                        src={homeBg}
                        alt="home-bg"
                        className="homepage-main__image_background"
                    />
                    <img
                        src={homeDots}
                        alt="home-bg"
                        className="homepage-main__image_background_dots"
                    />
                </div>
            </div>
        </div>
    );
};

export default HomepageMain;
