import React from 'react';
import styled from "styled-components";
import background from '../../assets/img/home_background.jpg'

const Main = styled.div`
    width: 100%;
    height: 730px;
    background: no-repeat center;
    
    -webkit-box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    -moz-box-shadow:    0px 3px 6px rgba(0, 0, 0, 0.16);
    box-shadow:         0px 3px 6px rgba(0, 0, 0, 0.16);
`

const MainHome = () => {
    return (
        <Main className="container-fluid main" style={{backgroundImage: `url(${background}`}}>

        </Main>
    );
};

export default MainHome;
