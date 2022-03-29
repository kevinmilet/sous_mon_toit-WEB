import React from 'react';
import SignupForm from "../../components/SignUp/SignupForm";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";


const SignUpView = () => {
    return (
        <div>
            <Header/>
            <SignupForm />
            <Footer/>
        </div>
    );
};

export default SignUpView;
