import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import colors from '../../utils/styles/colors';
import axios from 'axios';

const ContactForm = styled.form`
    background-color: ${colors.backgroundSecondary};
`
const ContactH1 = styled.h1`
    color: ${colors.secondary};
`
const ContactLabel = styled.label`
    color: ${colors.secondaryBtn};
`
const ContactBtn = styled.button`
    background-color: ${colors.primaryBtn};
    color: #fff;
`
const Contact = () => {

    const [userData, setUserData] = useState({})

    axios.defaults.headers.common = {'Authorization': `Bearer ${localStorage["token"]}`}
    useEffect(()=>{
        if(localStorage["token"] != null){

            axios.post("http://api-sousmontoit.am.manusien-ecolelamanu.fr/public/api/c/me")
            .then(res=>{
                console.log(res.data)
                setUserData(res.data);
            }).catch(error=>{
                console.log(error.message);
            })
        }
    },[])

    console.log(localStorage["token"]);

    return (
        <div className="container col-md-6 mx-auto mt-5">
            <ContactForm className="p-4 rounded row">
                <ContactH1 className="text-center">Nous contactez</ContactH1>
                <p className="text-dark">Merci de compléter le formulaire ci-après. Vous serez recontacté(e) par mail.</p>
                <p className="text-dark">Si votre demande concerne des références particulières, merci de les indiquer.</p>
                <div className="col-md-6">
                    <div className="mb-3">
                        <ContactLabel htmlFor="firstname" className="form-label">Prénom</ContactLabel>
                        <input type="text" className="form-control" id="firstname" value={userData.firstname}  name="firstname" required />
                    </div>
                    <div className="mb-3">
                        <ContactLabel htmlFor="lastname" className="form-label">Nom</ContactLabel>
                        <input type="text" className="form-control" id="lastname" value={userData.lastname} name="lastname" required />
                    </div>
                    <div className="mb-3">
                        <ContactLabel htmlFor="mail" className="form-label">Adresse mail</ContactLabel>
                        <input type="email" className="form-control" id="mail" value={userData.mail} name="mail" required />
                    </div>
                    <div className="mb-3">
                        <ContactLabel htmlFor="tel" className="form-label">Téléphone</ContactLabel>
                        <input type="tel" className="form-control" id="tel" value={userData.phone} name="tel"/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="mb-3">
                        <ContactLabel htmlFor="description" className="form-label">Votre message</ContactLabel>
                        <textarea className="form-control" id="description" name="description" rows="5" required ></textarea>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input text-light" id="newsletter" name="newsletter"/>
                        <label className="form-check-label text-dark" htmlFor="newsletter" >J’accepte de recevoir les lettres d’information de la société Sous Mon Toit.</label>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input text-light" id="notRobot" name="notRobot" required/>
                        <label className="form-check-label text-dark" htmlFor="notRobot" >Je confirme que je ne suis pas un robot</label>
                    </div>
                    <ContactBtn type="submit" className="btn float-end">Envoyer</ContactBtn>
                </div>
            </ContactForm>
        </div>
    );
};

export default Contact;