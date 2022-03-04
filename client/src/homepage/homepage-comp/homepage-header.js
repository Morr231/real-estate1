import React from "react";
import "../homepage-sass/homepage-header.sass";

import logo from "../homepage-img/logo.png";

const HomepageHeader = () => {
    return (
        <div className="homepage-header">
            <div className="homepage-header-logo__container">
                <img src={logo} alt="logo" className="homepage-header-logo" />
            </div>

            <nav className="homepage-header-nav">
                <ul className="homepage-header-nav__container">
                    <li className="homepage-header-nav__element">
                        <a
                            href="#"
                            className="homepage-header-nav__element_link"
                        >
                            Top offers
                        </a>
                    </li>
                    <li className="homepage-header-nav__element">
                        <a
                            href="#"
                            className="homepage-header-nav__element_link"
                        >
                            Search in offers
                        </a>
                    </li>
                    <li className="homepage-header-nav__element">
                        <a
                            href="#"
                            className="homepage-header-nav__element_link"
                        >
                            References
                        </a>
                    </li>
                    <li className="homepage-header-nav__element">
                        <a
                            href="#"
                            className="homepage-header-nav__element_link"
                        >
                            About us
                        </a>
                    </li>
                    <li className="homepage-header-nav__element">
                        <a
                            href="#"
                            className="homepage-header-nav__element_link"
                        >
                            Our team
                        </a>
                    </li>
                </ul>
            </nav>

            <button className="homepage-header-contact">Contact us</button>
        </div>
    );
};

export default HomepageHeader;
