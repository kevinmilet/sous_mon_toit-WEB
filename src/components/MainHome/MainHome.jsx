import React from 'react';
import styled from "styled-components";
import background from '../../assets/img/home_background.jpg'

const Main = styled.div`
    width: 100%;
    height: 730px;
    background: no-repeat center;
    margin-top: 15px;
    -webkit-box-shadow: 0px 2px 5px 0px rgba(50, 50, 50, 0.75);
    -moz-box-shadow:    0px 2px 5px 0px rgba(50, 50, 50, 0.75);
    box-shadow:         0px 2px 5px 0px rgba(50, 50, 50, 0.75);
`

const MainHome = () => {
    return (
        <Main className="container-fluid main" style={{backgroundImage: `url(${background}`}}>

        </Main>
    );
};

export default MainHome;
