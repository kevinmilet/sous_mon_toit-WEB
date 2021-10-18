import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import colors from '../../utils/styles/colors';
import axios from 'axios';

const DetailEstate = () => {

    var idEstate = 1 // a changer

    const [oneEstateData, setOneEstateData] = useState({})
    const [pictureCover, setPictureCover] = useState()
    const [picturesList, setPicturesList] = useState({})


    // Récupération des données de l'estate
    // axios.defaults.headers.common = {'Authorization': `Bearer ${localStorage["token"]}`}
    useEffect(()=>{

        //Donnée du bien 
        axios.get("http://localhost:8000/estates/" + idEstate)
        .then(res => {
            setOneEstateData(res.data)
        }).catch(error => {
            console.log(error.message)
        })
        
        //Image de couverture du bien
        axios.get("http://localhost:8000/estates_pictures/cover/" + idEstate)
        .then(res => {
            setPictureCover(res.data)
        }).catch(error => {
            console.log(error.message)
        })

        // liste des images du bien
        axios.get("http://localhost:8000/estates_pictures/" + idEstate)
        .then(res => {
            setPicturesList(res.data)
        }).catch(error => {
            console.log(error.message)
        })
        
    },[])
    console.log(pictureCover)
    console.log(picturesList)

    return (
        <div className="container col-12 col-sm-10 col-md-8 col-lg-7 mx-auto mt-5 bg-light p-5">
            <div className="row">
                <p className="">Reference du biens : {oneEstateData.reference}</p>
                <p className="text-danger float-end">{oneEstateData.price}€</p>
            </div>
            <div className="row">
                <img src="" className="img-fluid" alt={oneEstateData.title}/>
            </div>
            <div className="row">
                <h2>{oneEstateData.title}</h2>
                <p>{oneEstateData.description}</p>
            </div>
            <div className="row p-3 border border-dark">
                <h2 className="text-decoration-underline">CARACTERISTIQUES</h2>
                <div className="col-12 col-md-6">
                    <h3>Général</h3>
                    <p>Année de construction : <b>{oneEstateData.year_of_construction}</b></p>
                    <p>Surface habitable au sol : <b>{oneEstateData.living_surface}m²</b></p>
                    <p>Surface habitable ( selon Loi Carrez ) : <b>{oneEstateData.carrez_law}m²</b></p>
                    <p>Superficie du terrain : <b>{oneEstateData.land_surface}m²</b></p>

                    <h3>Aspects financiers</h3>
                    <p>Prix : <b>{oneEstateData.price}€</b></p>
                    <p>Taxe foncière : <b>{oneEstateData.property_charge}€</b></p>
                    <p>Charges locatives : <b>{oneEstateData.rental_charge ? oneEstateData.rental_charge + "€" : "non renseigné"}</b></p>
                    <p>Charges de co-propriété : <b>{oneEstateData.coownership_charge ? oneEstateData.coownership_charge + "€" : "non renseigné"}</b></p>
                </div>
                <div className="col-12 col-md-6">
                    <h3>Interieur</h3>
                    <p>Nombre de pièces : <b>{oneEstateData.nb_rooms} pièces</b></p>
                    <p>Nombre de salle de bain : <b>{oneEstateData.nb_bathrooms} pièces</b></p>
                    <p>Nombre de sanitaire : <b>{oneEstateData.nb_sanitary} pièces</b></p>
                    <p>Nombre de cuisine : <b>{oneEstateData.nb_kitchen} pièces</b></p>
                    <p>Type de cuisine : <b>{oneEstateData.type_kitchen}</b></p>
                    <p>Type de chauffage : <b>{oneEstateData.heaters}</b></p>

                    <h3>Extérieur</h3>
                    <p>Balcon : <b>{oneEstateData.nb_balcony}</b></p>
                    <p>Garage : <b>{oneEstateData.nb_garage}</b></p>
                    <p>Parking : <b>{oneEstateData.nb_parking}</b></p>
                </div>
            </div>
        </div>
    );
};

export default DetailEstate;