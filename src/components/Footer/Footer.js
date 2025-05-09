import logo from "../../Assets/Images/lifeStyleImage.jpeg";
import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaEnvelope } from "react-icons/fa";
import "./FooterStyle.css"

function Footer () {

    return(
        <div className="footer-section">
            <div className="container-1">
             <img src={logo} alt="Lifestyle Logo" className="brand-logo" />
             <span className="policy">Terms & Conditions - Privacy Policy</span>
             <FaEnvelope className="email-logo" />
            <span className="email">help@lifestyle.com</span>
            </div>
            <div className="container-2">
                <FaFacebook  />
                <FaInstagram  />
                <FaYoutube />
            </div>
        </div>

    );

};
export default Footer;