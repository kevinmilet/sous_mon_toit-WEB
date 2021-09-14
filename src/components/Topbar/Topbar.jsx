import React from 'react';
import logo from '../../assets/img/logo_sousMonToit_Long.png'
import './Topbar.css';

const Topbar = () => {
    return (
        <div className="container-fluid">
            <div className="row rowHeader">
                <div className="col logoCol">
                    <img src={logo} className="logo" alt="Logo Sous Mon Toit"/>
                </div>
                <div className=" col linkCol">
                    {/*<Link href="#" className="connectLink">Se connecter</Link>*/}
                    <a href="#" className="connectLink">Se connecter</a>
                </div>
            </div>
        </div>
    );
};

export default Topbar;
