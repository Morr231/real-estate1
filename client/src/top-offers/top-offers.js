import "./top-offers-sass/top-offers.sass";

import TopOffersUp from "./top-offers-comp/top-offers-up";
import TopOffersMain from "./top-offers-comp/top-offers-main";

function TopOffers() {
    return (
        <div className="top-offers">
            <div className="container">
                <TopOffersUp />
                <TopOffersMain />
            </div>
        </div>
    );
}

export default TopOffers;
