import React from 'react';
import Topbar from "../../components/Topbar/Topbar";
import Menu from "../../navigation/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import MainHome from "../../components/MainHome/MainHome";
import Header from "../../components/Header/Header";
import Agency from '../../components/Agency/Agency';

const Home = () => {
    return (
        <div>
            <Header/>
            <Agency/>
            <Footer/>
        </div>
    );
};

export default Home;
