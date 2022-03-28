import React from 'react';
import styled from "styled-components";
import NewsLetter from "./Newsletter";
import Socials from "./Socials";
import colors from "../../utils/styles/colors";

const FooterContainer = styled.footer`
    display: flex;
    margin-top: 50px;
    width: 100%;
    // height: 200px;
    flex-direction: column;
    justify-content: center;
    background-color: ${colors.primary};
`
const RowFooter = styled.div`
    margin: 0 auto;
`

const ContactButton = styled.a`
    width: 175px;
    height: 50px;
    color: ${colors.backgroundPrimary};
    border-radius: 50px;
    background: ${colors.primaryBtn};
    padding-top: 10px;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    &:hover {
        color: ${colors.primaryBtn};
        background: ${colors.backgroundPrimary};
        border: 2px solid ${colors.primaryBtn};
    }
    &:focus {
        outline: none;
        box-shadow: none;
    }
`

const SocialsCol = styled.div`
    // margin: 0 auto;
`
const Copyright = styled.p`
    color: ${colors.backgroundPrimary};
    font-size: 18px;
    text-align: center;
    padding-top: 15px;
`

const Footer = () => {
    return (
        <FooterContainer className="bottom-0">
            <div className="container-fluid ">
                <RowFooter className="row">
                    <div className="col-12 col-md-4 d-flex mt-3 text-center justify-content-center">
                        <NewsLetter />
                    </div>
                    <div className="col-12 col-md-4 d-flex mt-3 text-center justify-content-center">
                        <ContactButton href="/contact" className='btn mt-3'>Contactez-nous</ContactButton>
                    </div>
                    <SocialsCol className="col-12 col-md-4 d-flex mt-3 text-center justify-content-center">
                        <Socials />
                    </SocialsCol>
                    <Copyright>2022 Sous mon toit</Copyright>
                </RowFooter>
            </div>
        </FooterContainer>
    );
};

export default Footer;
