import "../footer-sass/footer-up.sass";

import paperPlane from "../footer-img/paper-plane.png";

function FooterUp() {
    return (
        <div className="footer-up">
            <div className="footer-up-container">
                <div className="footer-up-image__container">
                    <img
                        src={paperPlane}
                        alt="paper plane"
                        className="footer-up-image"
                    />
                </div>

                <div className="footer-up-right">
                    <h2 className="footer-up-right__header">
                        Subscribe to newsletter
                    </h2>
                    <div className="footer-up-right__description">
                        Get the latest news and interesting offers and real
                        estate
                    </div>
                    <form className="footer-up-right__form">
                        <input
                            className="footer-up-right__form_input"
                            type="text"
                            placeholder="Your e-mail address"
                        />
                        <button className="footer-up-right__form_button">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FooterUp;
