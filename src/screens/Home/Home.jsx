import React from 'react';
import styled from 'styled-components';
import Header from "../../components/Header/Header";

const HomeWrapper = styled.div`
    // display: flex;
    // justify-content: center;
`

const Home = () => {
    return (
        <HomeWrapper>
            <Header/>
        </HomeWrapper>
    );
};

export default Home;
