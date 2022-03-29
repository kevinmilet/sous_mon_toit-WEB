import React from 'react';
import DetailEstate from "../../components/DetailEstate/DetailEstate";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const DetailEstateView = () => {
    return (
        <div>
            <Header/>
            <DetailEstate />
            <Footer/>
        </div>
    );
};

export default DetailEstateView;
