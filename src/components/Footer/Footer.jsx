import React from 'react';
import styled from "styled-components";
import NewsLetter from "./Newsletter";
import Socials from "./Socials";
import colors from "../../utils/colors";

const FooterContainer = styled.footer`
    display: flex;
    margin-top: 50px;
    width: 100%;
    height: 200px;
    flex-direction: column;
    justify-content: center;
    background-color: ${colors.primary};
`
const RowFooter = styled.div`
    margin: 0 auto;
`
const SocialsCol = styled.div`
    margin: 0 auto;
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
            <div className="container-fluid">
                <RowFooter className="row">
                    <div className="col-12 col-md-6 d-flex justify-content-center">
                        <NewsLetter/>
                    </div>

                    <SocialsCol className="col-12 col-md-6 d-flex justify-content-center">
                        <Socials className="socials"/>
                    </SocialsCol>
                    <Copyright>2021 Sous mon toit</Copyright>
                </RowFooter>
            </div>
        </FooterContainer>
    );
};

export default Footer;
