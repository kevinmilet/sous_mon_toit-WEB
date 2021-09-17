import React, { useState, useEffect } from 'react';
import './Contact.css'
import styled from "styled-components";
import colors from '../../utils/styles/colors';
import axios from 'axios';


const ContactForm = styled.form`
    background-color: ${colors.backgroundPrimary};
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
const ContactBtn = styled.button`
    background-color: ${colors.primaryBtn};
    color: #fff;
`
const ContactEtoile = styled.span`
    color:${colors.secondary};
`
const Contact = () => {

    // Données de l'utilisateur connecté
    const [userData, setUserData] = useState({})

    // Récupération des données de l'utilisateur connecté
    axios.defaults.headers.common = {'Authorization': `Bearer ${localStorage["token"]}`}
    useEffect(()=>{
        if(localStorage["token"] != null  ){

            axios.post("http://api-sousmontoit.am.manusien-ecolelamanu.fr/public/api/c/me")
            .then(res=>{
                setUserData(res.data);
            }).catch(error=>{
                console.log(error.message);
            })
        }
    },[])

    // Données du formulaire
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [mail, setMail] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")
    const [newsletter, setNewsletter] = useState(false) // fonctionnalité a développer
    // const [notRobot, setNotRobot] = useState(false)

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
        if (document.getElementById("notRobot").checked == true)
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
                    var labelField = document.getElementsByClassName('obligatoire')
                    labelField.forEach(element => {
                        element.style.color = colors.secondary
                    });
                }
            }
        }else{
            document.querySelector('.form-message').innerHTML = "Merci de cocher la case indiquant que vous n'êtes pas un robot !"  
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
            setNewsletter(false);
            document.querySelector('.mail-error').innerHTML = "";
            document.querySelector('.form-message').innerHTML = "";
            document.getElementById("newsletter").checked = false;
            document.getElementById("notRobot").checked = false;

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
            <ContactSuccess className="text-center" id="msgSuccess"></ContactSuccess>
            <ContactForm className="p-4 rounded row">
                <ContactH1 className="text-center">Nous contactez</ContactH1>
                <p className="text-dark">Merci de compléter le formulaire ci-après. Vous serez recontacté(e) par mail.</p>
                <p className="text-dark">Si votre demande concerne des références particulières, merci de les indiquer.</p>
                <div className="col-md-6">
                    <div className="mb-3">
                        <ContactLabel htmlFor="firstname" className="form-label">Prénom</ContactLabel>
                        <input type="text" className="form-control" id="firstname" value={userData.firstname ? userData.firstname : firstname}  name="firstname" onChange={(e)=> setFirstname(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <ContactLabel htmlFor="lastname" className="form-label">Nom</ContactLabel>
                        <input type="text" className="form-control" id="lastname" value={userData.lastname ? userData.lastname : lastname} name="lastname" onChange={(e)=> setLastname(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <ContactLabel htmlFor="mail" className="form-label obligatoire">Adresse mail<ContactEtoile>*</ContactEtoile></ContactLabel>
                        <input type="email" className="form-control" id="mail" value={userData.mail ? userData.mail : mail} name="mail" onChange={(e)=> setMail(e.target.value)} required />
                        <div className="mail-error text-danger text-center"></div>
                    </div>
                    <div className="mb-3">
                        <ContactLabel htmlFor="Phone" className="form-label">Téléphone</ContactLabel>
                        <input type="Phone" className="form-control" id="Phone" value={userData.phone ? userData.phone : phone} onChange={(e)=> setPhone(e.target.value)} name="Phone"/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="mb-3">
                        <ContactLabel htmlFor="message" className="form-label obligatoire">Votre message<ContactEtoile>*</ContactEtoile></ContactLabel>
                        <textarea className="form-control" id="message" name="message" rows="5" value={message} onChange={(e)=> setMessage(e.target.value)} required ></textarea>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input text-light" id="newsletter" onChange={(e)=> setNewsletter(e.target.value)} name="newsletter"/>
                        <label className="form-check-label text-dark" htmlFor="newsletter" >J’accepte de recevoir les lettres d’information de la société Sous Mon Toit.</label>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input text-light" id="notRobot" name="notRobot" required/>
                        <label className="form-check-label text-dark" htmlFor="notRobot" >Je confirme que je ne suis pas un robot<ContactEtoile>*</ContactEtoile></label>
                    </div>
                    <div className="text-danger fs-6"><ContactEtoile>*</ContactEtoile>Champs obligatoires</div>
                    <ContactBtn type="submit" onClick={handleSubmit} className="btn float-end">Envoyer</ContactBtn>
                </div>
                <div className="form-message text-danger fs-5 text-center"></div>
            </ContactForm>
            
        </div>
    );
};

export default Contact;