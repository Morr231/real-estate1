import "../top-offers-sass/top-offers-up.sass";

function TopOffersUp() {
    return (
        <div className="top-offers-up">
            <div className="top-offers-up__text">
                <h2 className="top-offers-up__header">Top offers</h2>
                <div className="top-offers-up__header_bottom">
                    Fulfill your career dreams, enjoy all the achievements of
                    the city center and luxury housing to the fullest.
                </div>
            </div>

            <button className="top-offers-up__button">Show all offers</button>
        </div>
    );
}

export default TopOffersUp;
