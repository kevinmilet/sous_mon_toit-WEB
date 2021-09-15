import React from 'react';
import colors from '../../utils/colors';
import './Contact.css'

const Contact = () => {
    return (
        <div className="container col-md-6 mx-auto">
            <form className="p-4 bg-danger rounded row">
                <h1 className="text-light text-center">Nous contactez </h1>
                <p className="text-light">Merci de compléter le formulaire ci-après. Vous serez recontacté par mail.</p>
                <p className="text-light">Si votre demande concerne des références particulières, merci de les indiquer.</p>
                <div className="col-md-6">
                    <div className="mb-3">
                        <label for="firstname" className="form-label text-light">Prénom</label>
                        <input type="text" className="form-control" id="firstname" name="firstname" required />
                    </div>
                    <div className="mb-3">
                        <label for="lastname" className="form-label text-light">Nom</label>
                        <input type="text" className="form-control" id="lastname" name="lastname" required />
                    </div>
                    <div className="mb-3">
                        <label for="mail" className="form-label text-light">Adresse mail</label>
                        <input type="email" className="form-control" id="mail" name="mail" required />
                    </div>
                    <div className="mb-3">
                        <label for="tel" className="form-label text-light">Téléphone</label>
                        <input type="tel" className="form-control" id="tel" name="tel"/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div class="mb-3">
                        <label for="description" className="form-label text-light">Votre message</label>
                        <textarea className="form-control" id="description" name="description" rows="5" required ></textarea>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input text-light" id="newsletter" name="newsletter"/>
                        <label className="form-check-label text-light" for="newsletter" >J’accepte de recevoir les lettres d’information de la société Sous Mon Toit.</label>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input text-light" id="notRobot" name="notRobot" required/>
                        <label className="form-check-label text-light" for="notRobot" >Je confirme que je ne suis pas un robot</label>
                    </div>
                    <button type="submit" className="btn btn-primary float-end">Connexion</button>
                </div>

            </form>
        </div>
    );
};

export default Contact;