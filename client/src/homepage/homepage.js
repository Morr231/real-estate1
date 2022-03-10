import React from "react";
import "./homepage-sass/homepage.sass";

import HomepageHeader from "./homepage-comp/homepage-header";

const Homepage = () => {
    return (
        <div className="homepage">
            <div className="container">
                <HomepageHeader />
            </div>
        </div>
    );
};

export default Homepage;
