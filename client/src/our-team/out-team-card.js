import "./our-team/our-team-card.sass";

function OurTeamCard({ image, name, position }) {
    return (
        <div className="our-team-card">
            <div className="our-team-card__image_container">
                <img
                    src={image}
                    alt="person"
                    className="out-team-card__image"
                />
            </div>

            <div className="our-team-card__name">{name}</div>

            <div className="our-team-card__position">{position}</div>
        </div>
    );
}

export default OurTeamCard;
