import React, {useContext, useState} from 'react';
import styled from "styled-components";
import colors from '../../utils/styles/colors';
import axios from 'axios';
import {Context} from "../../utils/context/Context";
import ApiRoutes from "../../utils/const/ApiRoutes";
import {StyledBtnPrimary, StyledInput} from "../../utils/styles/Atoms";

const ConnexionForm = styled.form`
    background-color: ${colors.backgroundPrimary};
    -webkit-box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    -moz-box-shadow:    0px 3px 6px rgba(0, 0, 0, 0.16);
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
`
const ConnexiontH1 = styled.h1`
    color: ${colors.secondary};
`
const ConnexionLabel = styled.label`
    color: ${colors.secondaryBtn};
`

const SignIn = () => {
    const API_URL = useContext(Context).apiUrl;
    const [mail, setMail] = useState("pass@gmail.com")
    const [password, setPassword] = useState("pouet")

    const handleChange = (event)=>{

        if(event.target.id === "mail"){
            setMail(event.target.value);  
        }else{
            setPassword(event.target.value)
        }        
    }
    
    const login = (e)=>{

        e.preventDefault();
        console.log("test");
        axios.post(API_URL + ApiRoutes.login, { mail, password })
        .then(res=>{
            localStorage['token'] = res.data.token; // enregistrement du token dans le local storage
            window.location.href = '/';
        }).catch(error => {
            console.log(error.message);
        })

    };

    return (
        <div className="w-25 mx-auto mt-5">
            <ConnexionForm className="p-4 rounded">
                <ConnexiontH1 className="text-center">Connectez-vous</ConnexiontH1>
                <div className="mb-3">
                    <ConnexionLabel htmlFor="mail" className="form-label">Adresse mail</ConnexionLabel>
                    <StyledInput type="email" className="form-control" id="mail" name="mail" onChange={handleChange}/>
                </div>
                <p>( mail : pass@gmail.com )</p>
                <div className="mb-3">
                    <ConnexionLabel htmlFor="password" className="form-label">Mot de passe</ConnexionLabel>
                    <StyledInput type="password" className="form-control" id="password" name="password" onChange={handleChange}/>
                </div>
                <p>( password : pouet )</p>
                <StyledBtnPrimary type="submit" onClick={login} className="btn">Connexion</StyledBtnPrimary>
            </ConnexionForm>
        </div>
    );
};

export default SignIn;