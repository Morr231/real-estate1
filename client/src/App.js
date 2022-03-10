import "./App.css";

import Homepage from "./homepage/homepage";
import TopOffers from "./top-offers/top-offers";
import AboutUs from "./about-us/about-us";
import OurTeam from "./our-team/our-team";
import References from "./references/references";
import Footer from "./footer/footer";

import { Routes, Route } from "react-router-dom";

import SearchInOffersLink from "./links/search-in-offers-link";
import DefaultLink from "./links/default-link";

function App() {
    return (
        <div className="App">
            <Homepage />
            <Routes>
                <Route path="/" element={<DefaultLink />} />
                <Route
                    path="/search-in-offers"
                    element={<SearchInOffersLink />}
                />
            </Routes>
            {/* <TopOffers />
            <AboutUs /> */}
            {/* <OurTeam /> */}
            {/* <References /> */}
            <Footer />
        </div>
    );
}

export default App;
