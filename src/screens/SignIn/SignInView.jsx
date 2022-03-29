import React from 'react';
import SignIn from "../../components/SignIn/SignIn";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const SignInView = () => {
    return (
        <div>
            <Header/>
            <SignIn />
            <Footer/>
        </div>
    );
};

export default SignInView;
