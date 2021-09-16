import React from 'react';
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const ContactView = () => {
    return (
        <div>
            <Header/>
            <Contact />
            <Footer/>
        </div>
    );
};

export default ContactView;