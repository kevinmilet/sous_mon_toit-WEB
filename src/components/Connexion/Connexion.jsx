import React, { useEffect, useState } from 'react';
import './Connexion.css';
import styled from "styled-components";
import colors from '../../utils/styles/colors';
import axios from 'axios';

const ConnexionForm = styled.form`
    background-color: ${colors.backgroundPrimary};
`
const ConnexiontH1 = styled.h1`
    color: ${colors.secondary};
`
const ConnexionLabel = styled.label`
    color: ${colors.secondaryBtn};
`
const ConnexionBtn = styled.button`
    background-color: ${colors.primaryBtn};
    color: #fff;
`

const Connexion = () => {

    const [mail, setMail] = useState("pass@gmail.com")
    const [password, setPassword] = useState("pouet")

    const handleChange = (event)=>{

        if(event.target.id == "mail"){
            setMail(event.target.value);  
        }else{
            setPassword(event.target.value)
        }        
    }
    
    const login = (e)=>{

        e.preventDefault();
        console.log("test");
        axios.post("http://api-sousmontoit.am.manusien-ecolelamanu.fr/public/login/customer", { mail, password })
        .then(res=>{
            localStorage['token'] = res.data.token; // enregistrement du token dans le local storage

            alert("vous etes connecté !")// a changer 

        }).catch(error=>{
            console.log(error.message);
        })

    };

    return (
        <div className="w-25 mx-auto mt-5">
            <ConnexionForm className="p-4 rounded">
                <ConnexiontH1 className="text-center">Connectez-vous</ConnexiontH1>
                <div className="mb-3">
                    <ConnexionLabel htmlFor="mail" className="form-label">Adresse mail</ConnexionLabel>
                    <input type="email" className="form-control" id="mail" name="mail" onChange={handleChange}/>
                </div>
                <p>( mail : pass@gmail.com )</p>
                <div className="mb-3">
                    <ConnexionLabel htmlFor="password" className="form-label">Mot de passe</ConnexionLabel>
                    <input type="password" className="form-control" id="password" name="password" onChange={handleChange}/>
                </div>
                <p>( mot de passe : pouet )</p>
                <ConnexionBtn type="submit" onClick={login} className="btn" >Connexion</ConnexionBtn>
            </ConnexionForm>
            <p className="text-center">Vous n'avez pas encore de compte ?! <a href="/inscription">Inscrivez-vous dès maintenant !</a></p>
        </div>
    );
};

export default Connexion;