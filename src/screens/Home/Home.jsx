import React from 'react';
import Header from "../../components/Header/Header";
import Menu from "../../navigation/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import MainHome from "../../components/MainHome/MainHome";

const Home = () => {
    return (
        <div>
            <Header/>
            <Menu/>
            <MainHome/>
            <Footer/>
        </div>
    );
};

export default Home;
