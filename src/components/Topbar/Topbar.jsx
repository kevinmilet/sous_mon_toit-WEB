import React, {useContext, useState , useEffect} from 'react';
import styled from "styled-components";
import logo from '../../assets/img/logo_sousMonToit_Long.png'
import logoMobile from '../../assets/img/apple-icon-152x152.png'
import colors from '../../utils/styles/colors';
import axios from "axios";
import ApiRoutes from "../../utils/const/ApiRoutes";
import {Context} from "../../utils/context/Context";
import {Link} from "react-router-dom";

const Container = styled.div`
    padding: 0;
    margin: 0;
    // height: 80px;
    background-color: ${colors.backgroundPrimary};
    border-bottom: 1px solid ${colors.backgroundSecondary};
`
const RowHeader = styled.div`
    margin: 0;
`
const Logo = styled.img`
    
    z-index: 20;
`
const LinkCol = styled.div`
    margin: auto 0;
    text-align: center;
`
const ConnectLink = styled.a`
    width: 200px;
    height: 40px;
    border: 2px solid ${colors.secondaryBtn};
    border-radius: 50px;
    font-size: 16px;
    padding-top: 6px;
    color: ${colors.secondaryBtn};
    text-decoration: none;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    &:hover {
        color: ${colors.secondary};
        border-color: ${colors.secondary};
    }
`
const Logout = styled.a`
    color: ${colors.secondary};
    text-decoration: none;
    transition: transform .2s;
    &:hover {
        color: ${colors.secondaryBtn};
        transform: scale(1.5);
        cursor: pointer;
    }
`

const Topbar = () => {
  
   

    const largeur = window.innerWidth;
    if(largeur <= 375){
        var sourceLogo = logoMobile
    }else{
         sourceLogo =   logo ;
    }
    function reportWindowSize(){

        const largeur = window.innerWidth;
        if(largeur <= 375){
           return sourceLogo = logoMobile ;
        }else{
            return sourceLogo = logo ;
        }
    }
    window.onresize = window.addEventListener('resize',reportWindowSize );
    
console.log(sourceLogo);
    const API_URL = useContext(Context).apiUrl;
    const [tokenIsValid, setTokenIsValid] = useState(true);
    axios.defaults.headers.common = {'Authorization': `Bearer ${localStorage["token"]}`}

    // Test de la validité du token
    useEffect(() => {
        axios.interceptors.response.use(function (response) {
           
            return response
        }, function (error) {
            if (error.response) {
                if (error.response.status === 401) {
                    localStorage.clear()
                    setTokenIsValid(false)
                }
            }
            return Promise.reject(error);
        })
        axios.get(API_URL + ApiRoutes.customer + "/c/1")
    }, [API_URL]);

    const logout = () => {
        axios.post(API_URL + ApiRoutes.logout)
            .then(() => {
                localStorage.removeItem('token');
                localStorage.removeItem('userId');
                window.location.href = '/';
            }).catch(e => {
            console.log(e.message);
        })
    };

    return (
        <Container className="container-fluid">
            <RowHeader className="row rowHeader">
                <Link to="/" className="col-12 col-md-7 text-center text-md-start">
                    <Logo  src={sourceLogo} className="logo col-6" alt="Logo Sous Mon Toit"/>
                </Link>
                <LinkCol className="col-12 col-md-5 linkCol  ">
                    {tokenIsValid === true ?
                        <span>
                            <ConnectLink href="/my-account" type="button"
                                         className="connectLink ">Mon compte</ConnectLink>
                            <Logout className="fas fa-sign-out-alt ms-3 "
                                    onClick={logout}/>
                        </span>
                        :
                        <ConnectLink href="/connexion" type="button" className="connectLink col-5 ">Se
                            connecter</ConnectLink>
                    }
                </LinkCol>
            </RowHeader>
        </Container>
    );
};

export default Topbar;
