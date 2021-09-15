import React from 'react';
import './Connexion.css';
import styled from "styled-components";
import colors from '../../utils/styles/colors';

const ConnexionForm = styled.form`
    background-color: ${colors.backgroundSecondary};
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
    return (
        <div className="w-25 mx-auto mt-5">
            <ConnexionForm className="p-4 rounded">
                <ConnexiontH1 className="text-center">Connectez-vous</ConnexiontH1>
                <div className="mb-3">
                    <ConnexionLabel for="mail" className="form-label">Adresse mail</ConnexionLabel>
                    <input type="email" className="form-control" id="mail" name="mail"/>
                </div>
                <div className="mb-3">
                    <ConnexionLabel for="password" className="form-label">Mot de passe</ConnexionLabel>
                    <input type="password" className="form-control" id="password" name="password"/>
                </div>
                
                <ConnexionBtn type="submit" className="btn">Connexion</ConnexionBtn>
            </ConnexionForm>
            <p className="text-center">Vous n'avez pas encore de compte ?! <a href="/inscription">Inscrivez-vous dès maintenant !</a></p>

        </div>
    );
};

export default Connexion;