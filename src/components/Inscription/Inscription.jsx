import React from 'react';
import styled from "styled-components";
import colors from '../../utils/styles/colors';

const InscriptionForm = styled.form`
    background-color: ${colors.backgroundSecondary};
`
const InscriptionH1 = styled.h1`
    color: ${colors.secondary};
`
const InscriptionLabel = styled.label`
    color: ${colors.secondaryBtn};
`
const InscriptionBtn = styled.button`
    background-color: ${colors.primaryBtn};
    color: #fff;
`

const Inscription = () => {
    return (
        <div className="w-25 mx-auto mt-5">
            <InscriptionForm className="p-4 rounded">
                <InscriptionH1 className="text-center" > Inscrivez-vous </InscriptionH1>
                <div className="mb-3">
                    <InscriptionLabel htmlFor="firstname" className="form-label">Prénom</InscriptionLabel>
                    <input type="text" className="form-control" id="firstname" name="firstname" required />
                </div>
                <div className="mb-3">
                    <InscriptionLabel htmlFor="lastname" className="form-label">Nom</InscriptionLabel>
                    <input type="text" className="form-control" id="lastname" name="lastname" required />
                </div>
                <div className="mb-3">
                    <InscriptionLabel for="mail" className="form-label">Adresse mail</InscriptionLabel>
                    <input type="email" className="form-control" id="mail" name="mail"/>
                </div>
                <div className="mb-3">
                    <InscriptionLabel for="password" className="form-label">Mot de passe</InscriptionLabel>
                    <input type="password" className="form-control" id="password" name="password"/>
                </div>
                <InscriptionBtn type="submit" className="btn">Inscription</InscriptionBtn>
            </InscriptionForm>
        </div>
    );
};

export default Inscription;