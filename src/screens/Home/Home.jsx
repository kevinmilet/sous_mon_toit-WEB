import React from 'react';
import styled from 'styled-components';
import Header from "../../components/Header/Header";
import Menu from "../../navigation/Menu/Menu";

const HomeWrapper = styled.div`
    // display: flex;
    // justify-content: center;
`

const Home = () => {
    return (
        <HomeWrapper>
            <Header/>
            <Menu/>
        </HomeWrapper>
    );
};

export default Home;
