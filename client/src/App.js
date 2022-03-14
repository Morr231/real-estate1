import "./App.css";
import react, { useState } from "react";
import Homepage from "./homepage/homepage";
import TopOffers from "./top-offers/top-offers";
import AboutUs from "./about-us/about-us";
import OurTeam from "./our-team/our-team";
import References from "./references/references";
import Footer from "./footer/footer";
import DetailOffer from "./detail-offer/detail-offer";
import CardCreation from "./card-creation/card-creation";

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
                <Route path="/search-in-offers/:id" element={<DetailOffer />} />
                <Route path="/create-card" element={<CardCreation />} />
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
