import React from 'react';
import styled from "styled-components";
import facebook from '../../assets/icons/facebook.png';
import twitter from '../../assets/icons/twitter.png';
import linkedin from '../../assets/icons/linkedin.png';
import youtube from '../../assets/icons/youtube.png';
import instagram from '../../assets/icons/instagram.png';
import colors from "../../utils/styles/colors";

const Text = styled.p`
    color: ${colors.backgroundPrimary};
    font-size: 16px;
    margin-bottom: 2px;
    margin-left: 15px;
`
const SocialList = styled.ul`
    list-style: none;
    // margin: 0;
    // padding: 0;
    // overflow: hidden;
`
const SocialItem = styled.li`
    float: left;
    padding-right: 20px;
`
const Logo = styled.img`
    width: 40px;
    height: 40px;
`

const Socials = () => {
    return (
        <div>
            <Text>Suivez-nous sur</Text>
            <SocialList className="col-6 col-md-12 m-auto">
                <SocialItem className="text">
                    <a href="https://facebook.fr" target="_blank" rel="noreferrer"><Logo src={facebook} alt="Logo Facebook"/></a>
                </SocialItem>
                <SocialItem>
                    <a href="https://twitter.fr" target="_blank" rel="noreferrer"><Logo src={twitter} alt="Logo Twitter"/></a>
                </SocialItem>
                <SocialItem>
                    <a href="https://linkedin.fr" target="_blank" rel="noreferrer"><Logo src={linkedin} alt="Logo Linkedin"/></a>
                </SocialItem>
                <SocialItem>
                    <a href="https://youtube.fr" target="_blank" rel="noreferrer"><Logo src={youtube} alt="Logo Youtube"/></a>
                </SocialItem>
                <SocialItem>
                    <a href="https://instagram.fr" target="_blank" rel="noreferrer"><Logo src={instagram} alt="Logo Instagram"/></a>
                </SocialItem>
            </SocialList>
        </div>
    );
};

export default Socials;
