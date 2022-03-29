import React from 'react';
import UserAccountComponent from '../../components/User/UserAccountMenu';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const UserAccountView = () => {
    return (
        <div>
            <Header/>
            <UserAccountComponent/>
            <Footer/>
        </div>
    );
};

export default UserAccountView;
