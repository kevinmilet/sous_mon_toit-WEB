import React from 'react';
import './Menu.css';
import home from '../../assets/icons/home_pink.png';
import buy from '../../assets/icons/buy_pink.png';
import sell from '../../assets/icons/sell_pink.png';
import rent from '../../assets/icons/rent_pink.png';
import agency from '../../assets/icons/agency_pink.png';
import contact from '../../assets/icons/contact_pink.png';

const Menu = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item" ref="#">
                            <div>
                                <img src={home} className='menuIcons' alt="Accueil"/>
                            </div>
                            Accueil
                        </li>
                        <li className="nav-item" ref="#">
                            <div className="justify-content-center">
                                <img src={buy} className='menuIcons' alt="Accueil"/>
                            </div>
                            Acheter
                        </li>
                        <li className="nav-item" ref="#">
                            <div className="justify-content-center">
                                <img src={sell} className='menuIcons' alt="Accueil"/>
                            </div>
                            Vendre
                        </li>
                        <li className="nav-item" ref="#">
                            <div className="justify-content-center">
                                <img src={rent} className='menuIcons' alt="Accueil"/>
                            </div>
                            Louer
                        </li>
                        <li className="nav-item" ref="#">
                            <div className="justify-content-center">
                                <img src={agency} className='menuIcons' alt="Accueil"/>
                            </div>
                            Notre agence
                        </li>
                        <li className="nav-item" ref="#">
                            <div>
                                <img src={contact} className='menuIcons' alt="Accueil"/>
                            </div>
                            Nous contacter
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Menu;
