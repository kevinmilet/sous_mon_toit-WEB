import React from 'react';
import './Footer.css'
import NewsLetter from "./Newsletter";
import Socials from "./Socials";

const Footer = () => {
    return (
        <footer>
            <div className="container-fluid justify-content-around">
                <div className=" row rowFooter">
                    <div className="col">
                        <NewsLetter/>
                    </div>
                    <div className="col">
                        <Socials className="socials"/>
                    </div>
                </div>
            </div>
            <div className="copyright">2021 Sous mon toit</div>
        </footer>
    );
};

export default Footer;
