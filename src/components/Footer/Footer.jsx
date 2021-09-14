import React from 'react';
import styled from "styled-components";
import NewsLetter from "./Newsletter";
import Socials from "./Socials";
import colors from "../../utils/colors";

const FooterContainer = styled.footer`
    width: 100%;
    height: 200px;
    background-color: ${colors.primary};
    margin-top: 50px;
`
const RowFooter = styled.div`
    padding-top: 50px;
`
const SocialsCol = styled.div`
    margin-left: 19em;
`

const Copyright = styled.p`
    color: ${colors.backgroundPrimary};
    font-size: 18px;
    text-align: center;
    padding-top: 15px;
`

const Footer = () => {
    return (
        <FooterContainer>
            <div className="container-fluid justify-content-around">
                <RowFooter className="row">
                    <div className="col">
                        <NewsLetter/>
                    </div>
                    <SocialsCol className="col">
                        <Socials className="socials"/>
                    </SocialsCol>
                </RowFooter>
            </div>
            <Copyright>2021 Sous mon toit</Copyright>
        </FooterContainer>
    );
};

export default Footer;
