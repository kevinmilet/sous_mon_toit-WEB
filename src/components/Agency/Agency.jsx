import React, { useContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import DefaultPicture from "../../assets/img/user_default.png";
import { Context } from "../../utils/context/Context";
import ApiRoutes from "../../utils/const/ApiRoutes";
import PropTypes from "prop-types";
import Loader from "../Tools/Loader/Loader";
import styled from "styled-components";
import colors from "../../utils/styles/colors";

const Title = styled.h2`
  color: ${colors.primaryBtn}
`

const TitleH1 = styled.h1`
  color: ${colors.secondaryBtn}  
`

const TitleH5 = styled.h5`
  font-weight: bolder;
  text-decoration: underline
`

const Container = styled.div``

const Close = styled.div`
  display: inline;
  position: relative;
  color: red;
  font-weight: bolder
`

const LiStyle = styled.div`
  display: inline;
  position: relative;
  font-weight: bolder
`

// const ImgTitle= styled.img`
//   display: inline;
//   position: relative;
//   font-weight: bolder;
// `

const List = styled.div`
  text: center
`

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
          <TitleH1>Notre agence</TitleH1>
        </div>

        <img
          className="img-fluid mx-auto col-8"
          src="our_agency.jpg"
          alt="Locaux de l'agence Sous Mon Toit"
        />

        <div className="text-center col-md-7 mx-auto mt-3">
          L’ambition de Sous Mon Toit est de devenir la marque de référence de
          l’immobilier avec pour mission d’accompagner les clients dans la
          réalisation de leur projet en mettant l’humain au coeur de la
          relation avec une approche digitale et disruptive. Distingué par de
          nombreux prix dont celui de « Marque Préférée des Amienois », « Agence
          immobilière de l’année 2020-2021 » et « Agence immobilière de l’année
          2021-2022 », l'agence a démontré la pertinence de son positionnement
          original.
        </div>

        <Title className="font-weight-bold text-center mt-5">
          Notre agence vous accueille
        </Title>
        <div className="col-md-12 d-md-flex mt-5 justify-content-center">
         
            <List className="col-md-5">
              <TitleH5 className=" col-md-6">Nos horaires</TitleH5>
              <ul className="col-md-12 mt-4">
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
       

          <div className="col-md-5 mt-5 mt-lg-0">
            <TitleH5 className="col-md-6">Notre adresse</TitleH5>
            <div>70 rue des jacobins, 80000 Amiens</div>
            <div className="m-auto col-10 mt-4" >
              <img className="img-fluid" src="adresse.png" alt="plan d'accés" />
            </div>
          </div>
        </div>

        <div className="my-3 text-center mt-5">
          <Title>Notre équipe</Title>
        </div>

        {!loading &&
          staffData.map((item) => (
            <div className="card m-auto col-10 col-md-2  mt-3 mt-md-0">
              <img
                src={ApiRoutes.AVATAR_BASE_URL + item.avatar}
                className="card-img-top img-fluid "
                alt={item.firstname + item.lastname}
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
