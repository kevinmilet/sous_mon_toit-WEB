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
                <li><a href="#"><img src={facebook} alt="Logo Facebook"/></a></li>
                <li><a href="#"><img src={twitter} alt="Logo Facebook"/></a></li>
                <li><a href="#"><img src={linkedin} alt="Logo Facebook"/></a></li>
                <li><a href="#"><img src={youtube} alt="Logo Facebook"/></a></li>
                <li><a href="#"><img src={instagram} alt="Logo Facebook"/></a></li>
            </ul>
        </div>
    );
};

export default Socials;
