import React from 'react';
import styled from "styled-components";
import background from '../../assets/img/home_background.jpg';
import colors from "../../utils/styles/colors";
import SearchBar from "../SearchBar/SearchBar";

const Main = styled.div`
    width: 100%;
    height: 730px;
    background: no-repeat center;
    -webkit-box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    -moz-box-shadow:    0px 3px 6px rgba(0, 0, 0, 0.16);
    box-shadow:         0px 3px 6px rgba(0, 0, 0, 0.16);
`
const Slogan = styled.p`
     padding-top: 50px;
    font-weight: bold;
    font-size: 31px;
    text-align: center;
    color: ${colors.secondary};
    -webkit-text-shadow: 2px 5px 2px rgba(0, 0, 0, 0.16);
    -moz-text-shadow:    2px 5px 2px rgba(0, 0, 0, 0.16);
    text-shadow:        2px 5px 2px rgba(0, 0, 0, 0.16);
    @media screen and (min-width: 1280px){
        color: ${colors.backgroundPrimary};
    }

`

const MainHome = () => {
    return (
        <Main className="container-fluid" style={{backgroundImage: `url(${background}`}}>
            <div className="col-12 justify-content-center ">
                <Slogan className=" col-10 m-auto ">La bonne adresse pour trouver la votre !</Slogan>
            </div>
            <SearchBar/>
        </Main>
    );
};

export default MainHome;
