import React from "react";
import "./homepage-sass/homepage.sass";

import HomepageHeader from "./homepage-comp/homepage-header";
import HomepageMain from "./homepage-comp/homepage-main";

const Homepage = () => {
    return (
        <div className="homepage">
            <div className="container">
                <HomepageHeader />
                <HomepageMain />
            </div>
        </div>
    );
};

export default Homepage;
