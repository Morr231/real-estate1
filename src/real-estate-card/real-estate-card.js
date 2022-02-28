import "./real-estate-card.sass";

function RealEstateCard({ image, description, price, location }) {
    return (
        <div className="real-estate-card">
            <div className="real-estate-card__image_container">
                <img
                    src={image}
                    alt="real-estate"
                    className="real-estate-card__image"
                />
            </div>

            <div className="real-estate-card__information">
                <div className="real-estate-card__information_description">
                    {description}
                </div>

                <div className="real-estate-card__information_price">
                    {price}
                </div>

                <div className="real-estate-card__information_location">
                    {location}
                </div>
            </div>
        </div>
    );
}

export default RealEstateCard;
