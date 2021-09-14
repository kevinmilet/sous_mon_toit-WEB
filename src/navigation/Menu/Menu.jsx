import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import './Menu.css';
import home from '../../assets/icons/home_pink.png';
import buy from '../../assets/icons/buy_pink.png';
import sell from '../../assets/icons/sell_pink.png';
import rent from '../../assets/icons/rent_pink.png';
import agency from '../../assets/icons/agency_pink.png';
import contact from '../../assets/icons/contact_pink.png';

const Menu = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container fluid>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto menu">
                        <Nav.Link href="#" className="menuLink">
                            <div>
                                <img src={home} className='menuIcons' alt="Accueil"/>
                            </div>
                            Accueil
                        </Nav.Link>
                        <Nav.Link href="#" className="menuLink">
                            <div className="justify-content-center">
                                <img src={buy} className='menuIcons' alt="Accueil"/>
                            </div>
                            Acheter
                        </Nav.Link>
                        <Nav.Link href="#" className="menuLink">
                            <div className="justify-content-center">
                                <img src={sell} className='menuIcons' alt="Accueil"/>
                            </div>
                            Vendre
                        </Nav.Link>
                        <Nav.Link href="#" className="menuLink">
                            <div className="justify-content-center">
                                <img src={rent} className='menuIcons' alt="Accueil"/>
                            </div>
                            Louer
                        </Nav.Link>
                        <Nav.Link href="#" className="menuLink">
                            <div className="justify-content-center">
                                <img src={agency} className='menuIcons' alt="Accueil"/>
                            </div>
                            Notre agence
                        </Nav.Link>
                        <Nav.Link href="#" className="menuLink">
                            <div>
                                <img src={contact} className='menuIcons' alt="Accueil"/>
                            </div>
                            Nous contacter
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;
