import React, { useContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import DefaultPicture from "../../assets/img/user_default.png";
import { Context } from "../../utils/context/Context";
import ApiRoutes from "../../utils/const/ApiRoutes";
import PropTypes from "prop-types";
import Loader from "../Tools/Loader/Loader";
import styled from "styled-components";
const TitleList = styled.h4`
  font-weight: bolder;
`;
const Container = styled.div``;
const Close = styled.div`
  display: inline;
  position: relative;
  color: red;
  font-weight: bolder;
`;
const LiStyle = styled.div`
  display: inline;
  position: relative;
  font-weight: bolder;
`;
const List = styled.div`
  text: center;
`;
const Agency = () => {
  const [staffData, setStaffData] = useState({});
  const [loading, setLoading] = useState(true);
  const API_URL = useContext(Context).apiUrl;

  useEffect(() => {
    axios
      .get(API_URL + ApiRoutes.staff)
      .then((res) => {
        setStaffData(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [API_URL]);

  return loading ? (
    <Loader />
  ) : (
    <Container className="container ">
      <div className="row">
        <div className="my-3 text-center mx-auto">
          <h1>Notre agence</h1>
        </div>

        <div className="col-md-8  mx-auto">
          <img className=" " src="our_agency.jpg" alt="Photo de l'agence" />
        </div>
        <div className="col-md-12">
          <div className="text-center">
            L’ambition de Sous Mon Toit est de devenir la marque de référence de
            l’immobilier avec pour mission d’accompagner les clients dans la
            réalisation de leurs projets en mettant l’humain au coeur de la
            relation avec une approche digitale et disruptive. Distingué par de
            nombreux prix dont celui de « Marque Préférée des Amienois », «
            Agence immobilière de l’année 2020-2021 » et « Agence immobilière de
            l’année 2021-2022 », l'agence a démontré la pertinence de son
            positionnement original.
          </div>
          <List className="mt-5">
          <TitleList className="font-weight-bold text-center">
            Notre agence vous accueil 
          </TitleList>
          <h5>Horaires</h5>
            <ul className="mx-auto">
              <li>
                Lundi : <LiStyle>9h-12h30 / 14h-19h</LiStyle>
              </li>
              <li>
                Mardi : <LiStyle>9h-12h30 / 14h-19h</LiStyle>
              </li>
              <li>
                Mercredi : <LiStyle>9h-12h30 / 14h-19h</LiStyle>
              </li>
              <li>
                jeudi : <LiStyle>9h-12h30 / 14h-19h</LiStyle>
              </li>
              <li>
                Vendredi : <LiStyle>9h-12h30 / 14h-19h</LiStyle>
              </li>
              <li>
                Samedi : <LiStyle>9h-13h</LiStyle>
              </li>
              <li>
                Dimanche :<Close> Fermé</Close>
              </li>
            </ul>
          </List>
        </div>

        <div className="my-3 text-center">
          <h1>Notre équipe</h1>
        </div>

        {!loading &&
          staffData.map((item) => (
            <div className="card m-auto col-10 col-md-2">
              <img
                src={item.avatar}
                className="card-img-top img-fluid"
                alt="Photo staff"
              />
              <div className="card-body">
                <h5 className="card-title" key={item.id}>
                  {item.firstname} {item.lastname}
                </h5>
                <p className="card-text text-dark" />
              </div>
            </div>
          ))}
      </div>
    </Container>
  );
};

Agency.propTypes = {
  avatar: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
};

Agency.defaultProps = {
  picture: DefaultPicture,
  firstname: "",
  lastname: "",
};

export default Agency;
