import "../footer-sass/footer-bottom.sass";

import footerLogo from "../footer-img/footer-logo.png";

function FooterBottom() {
    return (
        <div className="footer-bottom">
            <div className="footer-bottom-image__container">
                <img
                    src={footerLogo}
                    alt="footer logo"
                    className="footer-bottom-image"
                />
            </div>
        </div>
    );
}

export default FooterBottom;
