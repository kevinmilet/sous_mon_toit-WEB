import React from 'react';
import './Connexion.css'

const Connexion = () => {
    return (
        <div className="w-25 mx-auto">
            <form className="p-4 bg-danger rounded">
                <div className="mb-3">
                    <label for="mail" className="form-label text-light">Adresse mail</label>
                    <input type="email" className="form-control" id="mail" name="mail"/>
                </div>
                <div className="mb-3">
                    <label for="password" className="form-label text-light">Mot de passe</label>
                    <input type="password" className="form-control" id="password" name="password"/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input text-light" id="stayConnected" name="stayConnected"/>
                    <label className="form-check-label text-light" for="stayConnected" >Resté connecté</label>
                </div>
                <button type="submit" className="btn btn-primary">Connexion</button>
                
            </form>
        </div>
    );
};

export default Connexion;