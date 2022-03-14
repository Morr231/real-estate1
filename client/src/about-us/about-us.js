import "./about-us.sass";

import dots from "./about-us-img/dots.png";
import person from "./about-us-img/person.png";

function AboutUs() {
    return (
        <div className="about-us" id="about-us">
            <div className="container about-us-wrapper">
                <div className="about-us__right">
                    <div className="about-us__right_image_container">
                        <img
                            src={dots}
                            alt="dots"
                            className="about-us__right_image_dots"
                        />
                        <img
                            src={person}
                            alt="person"
                            className="about-us__right_image_person"
                        />
                    </div>
                </div>

                <div className="about-us__left">
                    <h2 className="about-us__left_main_text">About us</h2>
                    <div className="about-us__left_under_text">
                        We are a company that connects the world of real estate
                        and finance. We provide a complete service for the sale,
                        purchase or rental of real estate. Our advantage is more
                        than 15 years of experience and soil in attractive
                        locations in Slovakia with branches in Bratislava and
                        Košice.
                        <br />
                        <br />
                        We have a connection to all banks on the Slovak market,
                        so we can solve everything under one roof. By constantly
                        innovating our business activities, we move forward and
                        we are able to offer truly above-standard services that
                        set us apart from the competition.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
