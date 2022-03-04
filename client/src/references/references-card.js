import "./references-sass/references-card.sass";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

function ReferencesCard({ reference, name, realEstate }) {
    return (
        <div className="references-card">
            <div className="references-card__reference">
                <FontAwesomeIcon
                    className="references-card__reference_quote"
                    icon={faQuoteLeft}
                />
                <div className="references-card__reference_text">
                    {reference}
                </div>
            </div>

            <div className="references-card__name">{name}</div>

            <div className="references-card__realEstate">{realEstate}</div>
        </div>
    );
}

export default ReferencesCard;
