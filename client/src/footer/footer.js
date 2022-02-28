import "./footer-sass/footer.sass";

import FooterUp from "./footer-comp/footer-up";
import FooterBottom from "./footer-comp/footer-bottom";

function Footer() {
    return (
        <div className="footer">
            <FooterUp />
            <FooterBottom />
        </div>
    );
}

export default Footer;
