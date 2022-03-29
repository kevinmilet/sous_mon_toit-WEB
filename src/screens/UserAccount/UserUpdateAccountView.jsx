import React from 'react';
import UserUpdateAccountComponent from '../../components/User/UserUpdateAccount';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const UserUpdateAccountView = () => {
    return (
        <div>
           <Header/>
           <UserUpdateAccountComponent/>
           <Footer/>
        </div>
    );
};

export default UserUpdateAccountView;
