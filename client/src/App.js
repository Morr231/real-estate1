import "./App.css";

import Homepage from "./homepage/homepage";
import TopOffers from "./top-offers/top-offers";
import AboutUs from "./about-us/about-us";
import OurTeam from "./our-team/our-team";
import References from "./references/references";
import Footer from "./footer/footer";

function App() {
    return (
        <div className="App">
            <Homepage />
            <TopOffers />
            <AboutUs />
            <OurTeam />
            <References />
            <Footer />
        </div>
    );
}

export default App;
