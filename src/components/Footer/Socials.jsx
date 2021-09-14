import React from 'react';
import facebook from '../../assets/icons/facebook.png';
import twitter from '../../assets/icons/twitter.png';
import linkedin from '../../assets/icons/linkedin.png';
import youtube from '../../assets/icons/youtube.png';
import instagram from '../../assets/icons/instagram.png';
import './Socials.css';

const Socials = () => {
    return (
        <div>
            <p>Suivez-nous sur</p>
            <ul>
                <li><a href="https://facebook.fr"><img src={facebook} alt="Logo Facebook"/></a></li>
                <li><a href="https://twitter.fr"><img src={twitter} alt="Logo Twitter"/></a></li>
                <li><a href="https://linkedin.fr"><img src={linkedin} alt="Logo Linkedin"/></a></li>
                <li><a href="https://youtube.fr"><img src={youtube} alt="Logo Youtube"/></a></li>
                <li><a href="https://instagram.fr"><img src={instagram} alt="Logo Instagram"/></a></li>
            </ul>
        </div>
    );
};

export default Socials;
