import React from "react";
import "../homepage-sass/homepage-header.sass";

import logo from "../homepage-img/logo.png";

import { Link } from "react-router-dom";

const HomepageHeader = () => {
    return (
        <div className="homepage-header">
            <div className="homepage-header-logo__container">
                <img src={logo} alt="logo" className="homepage-header-logo" />
            </div>

            <nav className="homepage-header-nav">
                <ul className="homepage-header-nav__container">
                    <li className="homepage-header-nav__element">
                        <Link
                            className="homepage-header-nav__element_link"
                            to="/"
                        >
                            Top Offers
                        </Link>
                    </li>
                    <li className="homepage-header-nav__element">
                        <a
                            href="#references"
                            className="homepage-header-nav__element_link"
                        >
                            References
                        </a>
                    </li>
                    <li className="homepage-header-nav__element">
                        <a
                            href="#about-us"
                            className="homepage-header-nav__element_link"
                        >
                            About us
                        </a>
                    </li>
                    <li className="homepage-header-nav__element">
                        <a
                            href="#our-team"
                            className="homepage-header-nav__element_link"
                        >
                            Our team
                        </a>
                    </li>
                    <li className="homepage-header-nav__element">
                        <Link
                            className="homepage-header-nav__element_link"
                            to="/search-in-offers"
                        >
                            Search in offers
                        </Link>
                    </li>
                    <li className="homepage-header-nav__element">
                        <Link
                            className="homepage-header-nav__element_link"
                            to="/create-card"
                        >
                            Create card
                        </Link>
                    </li>
                </ul>
            </nav>

            <button className="homepage-header-contact">Contact us</button>
        </div>
    );
};

export default HomepageHeader;
