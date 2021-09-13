import React from 'react';
import styled from 'styled-components';
// import {Link} from "react-router-dom";
import logo from '../../assets/img/logo_sousMonToit_Long.png'

const HomeLogo = styled.img`
    width: 390px;
    height: 100px;
    margin-left: 150px;
`

const ConectLink = styled.a`
    font-size: 24px;
    text-decoration: none;
    text-align: center;
    color: #707070;
    margin-right: 150px;
    &:hover {
    color: #E85A70;
  }
`

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Header = () => {
    return (
        <NavContainer>
            {/*<Link to="/">*/}
            <span>
                <HomeLogo src={logo}/>
            </span>
            {/*</Link>*/}
            <span>
                <ConectLink href="#">Se connecter</ConectLink>
            </span>
        </NavContainer>
    );
};

export default Header;
