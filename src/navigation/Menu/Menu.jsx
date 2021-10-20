import React from 'react';
import styled from "styled-components";
import home from '../../assets/icons/home_pink.png';
import buy from '../../assets/icons/buy_pink.png';
import sell from '../../assets/icons/sell_pink.png';
import rent from '../../assets/icons/rent_pink.png';
import agency from '../../assets/icons/agency_pink.png';
import contact from '../../assets/icons/contact_pink.png';
import colors from "../../utils/styles/colors";

const Navbar = styled.nav`
    padding: 0;
`
const Container = styled.div`
    background-color: ${colors.backgroundPrimary};
    margin: 0 auto;
    height: 80px;
    &.bottom {
        -webkit-box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
        -moz-box-shadow:    0px 3px 6px rgba(0, 0, 0, 0.16);
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);

    }
`
const MenuBurger = styled.button`
   background-color: ${colors.secondary};
`
const MenuItems = styled.ul`
    margin: 0 auto;
`
const MenuItem = styled.li`
    margin: 0 35px;
`
const MenuItemLink = styled.a`
    color: ${colors.secondary};
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    &:hover {
        color: ${colors.secondary};
    }
`
const Icons = styled.img`
    width: 40px;
    height: 40px;
`

const Menu = () => {
    return (
        <Navbar className="navbar navbar-expand-lg navbar-MenuItemght bg-MenuItemght">
            <Container className="container-fluid bottom">
                <MenuBurger className="navbar-toggler " type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">=</span>
                </MenuBurger>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <MenuItems className="navbar-nav me-auto mb-2 mb-lg-0">
                        <MenuItem className="nav-item">
                            <MenuItemLink href="/">
                                <div>
                                    <Icons src={home} alt="Accueil"/>
                                </div>
                                Accueil
                            </MenuItemLink>
                        </MenuItem>
                        <MenuItem className="nav-item">
                            <MenuItemLink href="/liste-des-biens">
                                <div className="justify-content-center">
                                    <Icons src={buy} alt="Acheter"/>
                                </div>
                                Acheter
                            </MenuItemLink>
                        </MenuItem>
                        <MenuItem className="nav-item">
                            <MenuItemLink href="for-sale">
                                <div className="justify-content-center">
                                    <Icons src={sell} alt="Vendre"/>
                                </div>
                                Vendre
                            </MenuItemLink>
                        </MenuItem>
                        <MenuItem className="nav-item">
                            <MenuItemLink href="#">
                                <div className="justify-content-center">
                                    <Icons src={rent} alt="Louer"/>
                                </div>
                                Louer
                            </MenuItemLink>
                        </MenuItem>
                        <MenuItem className="nav-item">
                            <MenuItemLink href="/our-agency">
                                <div className="justify-content-center">
                                    <Icons src={agency} alt="Notre agence"/>
                                </div>
                                Notre agence
                            </MenuItemLink>
                        </MenuItem>
                        <MenuItem className="nav-item">
                            <MenuItemLink href="/contact">
                                <div>
                                    <Icons src={contact} alt="Contact"/>
                                </div>
                                Nous contacter
                            </MenuItemLink>
                        </MenuItem>
                    </MenuItems>
                </div>
            </Container>
        </Navbar>
    );
};

export default Menu;
