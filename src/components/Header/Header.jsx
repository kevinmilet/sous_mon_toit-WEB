import React from 'react';
import styled from 'styled-components';
// import {Link} from "react-router-dom";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

const HomeLogo = styled.img`
    width: 390px;
    height: 100px;
    margin-left: 150px;
`
//
// const ConectLink = styled.a`
//     font-size: 24px;
//     text-decoration: none;
//     text-align: center;
//     color: #707070;
//     margin-right: 150px;
//     &:hover {
//     color: #E85A70;
//   }
// `
//
// const NavContainer = styled.nav`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>


    );
};

export default Header;
