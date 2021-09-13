import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import logo from '../../assets/img/logo_sousMonToit_Long.png'
import './Header.css';

const Header = () => {
    return (
        <Container fluid>
            <Row className="rowHeader">
                <Col className="logoCol">
                    <img src={logo} className="logo" alt="Logo Sous Mon Toit"/>
                </Col>
                <Col className="linkCol">
                    {/*<Link href="#" className="connectLink">Se connecter</Link>*/}
                    <a href="#" className="connectLink">Se connecter</a>
                </Col>
            </Row>
        </Container>
    );
};

export default Header;
