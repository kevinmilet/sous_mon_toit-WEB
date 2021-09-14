import React from 'react';
import styled from "styled-components";
import home from '../../assets/icons/home_pink.png';
import buy from '../../assets/icons/buy_pink.png';
import sell from '../../assets/icons/sell_pink.png';
import rent from '../../assets/icons/rent_pink.png';
import agency from '../../assets/icons/agency_pink.png';
import contact from '../../assets/icons/contact_pink.png';
import colors from "../../utils/colors";

const Navbar = styled.nav`
    padding: 0;
`

const Container = styled.div`
    background-color: ${colors.backgroundPrimary};
    margin: 0 auto;
    height: 80px;
`

const MenuMenuItemst = styled.ul`
    margin: 0 auto;
`

const MenuItem = styled.li`
    margin: 0 25px;
`

const MenuMenuItemnk = styled.a`
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
    width: 50px;
    height: 50px;
`

const Menu = () => {
    return (
        <Navbar className="navbar navbar-expand-lg navbar-MenuItemght bg-MenuItemght">
            <Container className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <MenuMenuItemst className="navbar-nav me-auto mb-2 mb-lg-0">
                        <MenuItem className="nav-item">
                            <MenuMenuItemnk href="#">
                                <div>
                                    <Icons src={home} alt="Accueil"/>
                                </div>
                                Accueil
                            </MenuMenuItemnk>
                        </MenuItem>
                        <MenuItem className="nav-item">
                            <MenuMenuItemnk href="#">
                                <div className="justify-content-center">
                                    <Icons src={buy} alt="Acheter"/>
                                </div>
                                Acheter
                            </MenuMenuItemnk>
                        </MenuItem>
                        <MenuItem className="nav-item">
                            <MenuMenuItemnk href="#">
                                <div className="justify-content-center">
                                    <Icons src={sell} alt="Vendre"/>
                                </div>
                                Vendre
                            </MenuMenuItemnk>
                        </MenuItem>
                        <MenuItem className="nav-item">
                            <MenuMenuItemnk href="#">
                                <div className="justify-content-center">
                                    <Icons src={rent} alt="Louer"/>
                                </div>
                                Louer
                            </MenuMenuItemnk>
                        </MenuItem>
                        <MenuItem className="nav-item">
                            <MenuMenuItemnk href="#">
                                <div className="justify-content-center">
                                    <Icons src={agency} alt="Notre agence"/>
                                </div>
                                Notre agence
                            </MenuMenuItemnk>
                        </MenuItem>
                        <MenuItem className="nav-item">
                            <MenuMenuItemnk href="#">
                                <div>
                                    <Icons src={contact} alt="Contact"/>
                                </div>
                                Nous contacter
                            </MenuMenuItemnk>
                        </MenuItem>
                    </MenuMenuItemst>
                </div>
            </Container>
        </Navbar>
    );
};

export default Menu;
