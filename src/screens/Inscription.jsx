import React from 'react';
import Inscription from "../components/Inscription/Inscription";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const InscriptionView = () => {
    return (
        <div>
            <Header/>
            <Inscription />
            <Footer/>
        </div>
    );
};

export default InscriptionView;