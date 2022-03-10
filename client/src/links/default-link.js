import "../App.css";

import HomepageMain from "../homepage/homepage-comp/homepage-main";
import TopOffers from "../top-offers/top-offers";
import AboutUs from "../about-us/about-us";
import OurTeam from "../our-team/our-team";
import References from "../references/references";

function DefaultLink() {
    return (
        <div className="App">
            <HomepageMain />
            <TopOffers />
            <AboutUs />
            <OurTeam />
            <References />
        </div>
    );
}

export default DefaultLink;
