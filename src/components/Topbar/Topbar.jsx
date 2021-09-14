import React from 'react';
import styled from "styled-components";
import logo from '../../assets/img/logo_sousMonToit_Long.png'
import colors from '../../utils/styles/colors';

const Container = styled.div`
    padding: 0;
    margin: 0;
    height: 80px;
    border-bottom: 1px solid ${colors.backgroundSecondary};
`
const RowHeader = styled.div`
    margin: 0;
`
const Logo = styled.img`
    width: 275px;
    height: auto;
    margin-left: 150px;
`
const LinkCol = styled.div`
    padding: 0;
    margin-top: 25px;
    margin-right: 7rem;
    text-align: right;
`
const ConnectLink = styled.a`
    font-size: 20px;
    color: ${colors.primary};
    text-decoration: none;
    &:hover {
        color: ${colors.secondary}
    }
`

const Topbar = () => {
    return (
        <Container className="container-fluid">
            <RowHeader className="row rowHeader">
                <div className="col">
                    <Logo src={logo} className="logo" alt="Logo Sous Mon Toit"/>
                </div>
                <LinkCol className="col linkCol">
                    {/*<Link href="#" className="connectLink">Se connecter</Link>*/}
                    <ConnectLink href="#" className="connectLink">Se connecter</ConnectLink>
                </LinkCol>
            </RowHeader>
        </Container>
    );
};

export default Topbar;
