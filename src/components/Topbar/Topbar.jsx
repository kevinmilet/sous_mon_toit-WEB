import React from 'react';
import styled from "styled-components";
import logo from '../../assets/img/logo_sousMonToit_Long.png'
import colors from '../../utils/styles/colors';

const Container = styled.div`
    padding: 0;
    margin: 0;
    height: 80px;
    background-color: ${colors.backgroundPrimary};
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
    margin: auto 0;
    margin-right: 7rem;
    text-align: center;
`
const ConnectLink = styled.a`
    width: 200px;
    height: 40px;
    border: 2px solid ${colors.secondaryBtn};
    border-radius: 50px;
    font-size: 16px;
    padding-top: 6px;
    color: ${colors.secondaryBtn};
    text-decoration: none;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    &:hover {
        color: ${colors.secondary};
        border-color: ${colors.secondary};
    }
`

const Topbar = () => {
    return (
        <Container className="container-fluid">
            <RowHeader className="row rowHeader d-flex justify-content-start">
                <div className="col">
                    <Logo src={logo} className="logo" alt="Logo Sous Mon Toit"/>
                </div>
                <LinkCol className="col linkCol d-flex justify-content-end">
                    {localStorage['token'] != null ?
                            <ConnectLink href="/my-account" type="button" className="connectLink">Mon compte</ConnectLink>
                            :
                            <ConnectLink href="/connexion" type="button" className="connectLink">Se connecter</ConnectLink>
                    }
                </LinkCol>
            </RowHeader>
        </Container>
    );
};

export default Topbar;
