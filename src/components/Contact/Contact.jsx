import React, {useContext, useEffect, useState} from 'react';
import styled from "styled-components";
import colors from '../../utils/styles/colors';
import axios from 'axios';
import PropTypes from "prop-types";
import {StyledBtnPrimary, StyledInput, StyledTextarea} from '../../utils/styles/Atoms';
import ApiRoutes from "../../utils/const/ApiRoutes";
import {Context} from "../../utils/context/Context";

const ContactForm = styled.form`
    background-color: ${colors.backgroundPrimary};
    -webkit-box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    -moz-box-shadow:    0px 3px 6px rgba(0, 0, 0, 0.16);
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
`
const ContactSuccess = styled.p`
    color : green;
    font-size: 2rem;
`
const ContactH1 = styled.h1`
    color: ${colors.secondary};
`
const ContactLabel = styled.label`
    color: ${colors.secondaryBtn};
`
const ContactEtoile = styled.span`
    color:${colors.secondary};
`
const Contact = () => {
    const API_URL = useContext(Context).apiUrl;

    // Données de l'utilisateur connecté
    const [userData, setUserData] = useState({})
    // Données du formulaire
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [mail, setMail] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")

    // Récupération des données de l'utilisateur connecté
    axios.defaults.headers.common = {'Authorization': `Bearer ${localStorage["token"]}`}
    useEffect(()=>{
        if(localStorage["token"] != null  ){

            axios.post(API_URL + ApiRoutes.me)
            .then(res=>{
                setUserData(res.data);
                setFirstname(res.data.firstname)
                setLastname(res.data.lastname)
                setMail(res.data.mail)
                setPhone(res.data.phone)

            }).catch(error=>{
                console.log(error.message);
            })
        }
    },[])

    //Fonction de contrôle de la validité de l'adresse mail
    const isMail = () =>{
        let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if(mail !== ""){
            if(mail.match(regex)){
                return true;
            }else{
                document.querySelector('.form-message').innerHTML = ""
                document.querySelector('.mail-error').innerHTML = "Adresse mail incorrect";
                return false;
            }
        }
    }

    // Fonction au submit du formulaire
    const handleSubmit = (e) => {
        e.preventDefault();
        if (document.getElementById("agree").checked === true)
        {
            if(isMail() && message){
                sendMsg( "template_y77xg6s" , {
                    firstname: firstname,
                    lastname: lastname,
                    mail : mail,
                    phone : phone,
                    message : message,
                });
            }else{
                if(!mail || !message){// il manque message ou mail ou les 2 
                    document.querySelector('.form-message').innerHTML = "Merci de remplir les champs requis"  
                    let labelField = document.getElementsByClassName('obligatoire')
                    labelField.forEach(element => {
                        element.style.color = colors.secondary
                    });
                }
            }
        }else{
            document.querySelector('.form-message').innerHTML = "Merci d'accepter les conditions"  
        }
    }

    //Envoi du message
    const sendMsg = (templateId, variables) =>{

        window.emailjs
        .send("service_y0u10dy", templateId , variables)
        .then((res) =>{
            // Message de succès
            document.getElementById('msgSuccess').innerHTML = "Message envoyé avec succès !";
            setTimeout(()=>{
                document.getElementById('msgSuccess').innerHTML = "";
            },10000);
            // On remet a zero les champs et messages d'erreurs
            setFirstname(""); 
            setLastname(""); 
            setMail(""); 
            setPhone(""); 
            setMessage(""); 
            document.querySelector('.mail-error').innerHTML = "";
            document.querySelector('.form-message').innerHTML = "";
            document.getElementById("agree").checked = false;

        })
        .catch(
            (err)=>{
                document.querySelector('.mail-error').innerHTML = "";
                document.querySelector('.form-message').innerHTML = "Une erreur s'est produite, veuillez réessayer."
            }
        )
    };

    return (
        <div className="container col-12 col-sm-10 col-md-8 col-lg-7 mx-auto mt-5">
            <ContactSuccess className="text-center" id="msgSuccess"/>
            <ContactForm className="p-4 rounded row">
                <ContactH1 className="text-center">Nous contactez</ContactH1>
                <p className="text-dark">Merci de compléter le formulaire ci-après. Vous serez recontacté(e) par mail.</p>
                <p className="text-dark">Si votre demande concerne des références particulières, merci de les indiquer.</p>
                <div className="col-md-6">
                    <div className="mb-3">
                        <ContactLabel htmlFor="firstname" className="form-label">Prénom</ContactLabel>
                        <StyledInput type="text" className="form-control" id="firstname" value={firstname}  name="firstname" onChange={(e)=> setFirstname(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <ContactLabel htmlFor="lastname" className="form-label">Nom</ContactLabel>
                        <StyledInput type="text" className="form-control" id="lastname" value={lastname} name="lastname" onChange={(e)=> setLastname(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <ContactLabel htmlFor="mail" className="form-label obligatoire">Adresse mail<ContactEtoile>*</ContactEtoile></ContactLabel>
                        <StyledInput type="email" className="form-control" id="mail" value={mail} name="mail" onChange={(e)=> setMail(e.target.value)} required />
                        <div className="mail-error text-danger text-center"/>
                    </div>
                    <div className="mb-3">
                        <ContactLabel htmlFor="Phone" className="form-label">Téléphone</ContactLabel>
                        <StyledInput type="Phone" className="form-control" id="Phone" value={phone} onChange={(e)=> setPhone(e.target.value)} name="Phone"/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="mb-3">
                        <ContactLabel htmlFor="message" className="form-label obligatoire">Votre message<ContactEtoile>*</ContactEtoile></ContactLabel>
                        <StyledTextarea className="form-control" id="message" name="message" rows="5" value={message} onChange={(e) => setMessage(e.target.value)} required />
                    </div>
                    <div className="mb-3 form-check">
                        <StyledInput type="checkbox" className="form-check-input text-light" id="agree" name="agree" required/>
                        <label className="form-check-label text-dark" htmlFor="agree" >J'ai bien noté que les informations personnelles communiquées sont utilisées uniquement pour traiter ma demande et ne sont jamais cédées à des tiers. Pour exercer mon droit d'accès, je peux joindre Sous Mon Toit par courrier postal.<ContactEtoile>*</ContactEtoile></label>
                    </div>
                    <div className="text-danger fs-6"><ContactEtoile>*</ContactEtoile>Champs obligatoires</div>
                    <StyledBtnPrimary type="submit" onClick={handleSubmit} className="btn float-end">Envoyer</StyledBtnPrimary>
                </div>
                <div className="form-message text-danger fs-5 text-center"/>
            </ContactForm>
            
        </div>
    );
};

Contact.propTypes = {
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    mail : PropTypes.string.isRequired,
    phone : PropTypes.string,
    message : PropTypes.string.isRequired,
    newsletter: PropTypes.bool.isRequired
}

Contact.defaultProps = {
    firstname: '',
    lastname: '',
    mail : '',
    phone : '',
    message : '',
    newsletter: false
}

export default Contact;