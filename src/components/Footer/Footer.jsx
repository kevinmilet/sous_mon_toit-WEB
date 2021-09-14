import React from 'react';
import './Footer.css'
import NewsLetter from "./Newsletter";
import Socials from "./Socials";


const Footer = () => {
    return (
        <footer>
            <Container className="justify-content-around">
                <Row className="rowFooter">
                    <Col>
                        <NewsLetter/>
                    </Col>
                    <Col>
                        <Socials className="socials"/>
                    </Col>
                </Row>
            </Container>
            <div className="copyright">2021 Sous mon toit</div>
        </footer>
    );
};

export default Footer;
