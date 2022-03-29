import React from 'react';
import MainHome from "../../components/MainHome/MainHome";
import EstatesRnd from "../../components/Estate/EstatesRnd";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const HomeView = (props) => {
    const {search} = props;
    return (
        <div>
            <Header/>
            <MainHome search={search}/>
            <EstatesRnd/>
            <Footer/>
        </div>
    );
};

export default HomeView;
