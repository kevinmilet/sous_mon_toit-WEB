import React from 'react';
import Footer from "../../components/Footer/Footer";
import MainHome from "../../components/MainHome/MainHome";
import Header from "../../components/Header/Header";
import UserAccountComponent from '../../components/User/UserAccountMenu';

const UserAccount = () => {
    return (
        <div>
            <Header/>
            <UserAccountComponent/>
            <Footer/>
        </div>
    );
};

export default UserAccount;