import React, {useContext, useEffect, useState} from "react";
import styled from "styled-components";
import colors from "../../utils/styles/colors";
import axios from "axios";
import PropTypes from "prop-types";
import {StyledBtnPrimary, StyledInput, StyledTextarea,} from "../../utils/styles/Atoms";
import {Context} from "../../utils/context/Context";
import ApiRoutes from "../../utils/const/ApiRoutes";
import background from "../../assets/img/maison_interieur.jpg";

const Container = styled.div`
`
const Text = styled.div`
font-weight: bold;
`;
const Head = styled.div`
  width: 100%;
  height: 730px;
  background: no-repeat;
`;
const HeadH1 = styled.h1`
  color: ${colors.primaryBtn};
`;
const SelectDiv = styled.div`
  color: ${colors.secondaryBtn};
`;
const Select = styled.select`
  border-radius: 50px;
  border: 2px solid ${colors.secondaryBtn};
  &:focus {
    outline: none;
    box-shadow: none;
  }
`;
const Option = styled.option`
  color: ${colors.secondaryBtn};
`;

const ForSaleForm = styled.form`
  background-color: ${colors.backgroundPrimary};
  -webkit-box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  -moz-box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
`;
const ContHeader = styled.form`
  background-color: "${colors.backgroundPrimary}";
  -webkit-box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  -moz-box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
`;
const ForSaleSuccess = styled.p`
  color: green;
  font-size: 2rem;
`;
const ForSaleH1 = styled.h2`
  color: ${colors.secondary};
`;

const ForSaleLabel = styled.label`
  color: ${colors.secondaryBtn};
`;
const ForSaleEtoile = styled.span`
  color: ${colors.secondary};
`;
const ForSale = () => {
  const API_URL = useContext(Context).apiUrl;
  const [loading, setLoading] = useState(true);
  const [estatesTypes, setEstatesTypes] = useState({});

  //false = 'Acheter', true = 'Louer'
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    axios
      .get(API_URL + ApiRoutes.estates_types)
      .then((response) => {
        setEstatesTypes(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [API_URL]);
  // Données de l'utilisateur connecté
  const [userData, setUserData] = useState({});

  // Récupération des données de l'utilisateur connecté
  axios.defaults.headers.common = {
    Authorization: `Bearer ${localStorage["token"]}`,
  };
  useEffect(() => {
    if (localStorage["token"] != null) {
      axios
        .post(
          "http://api-sousmontoit.am.manusien-ecolelamanu.fr/public/api/c/me"
        )
        .then((res) => {
          setUserData(res.data);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  }, []);

  // Données du formulaire
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [estateType, setEstateType] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const [newsletter, setNewsletter] = useState(false); // fonctionnalité a développer
  // const [notRobot, setNotRobot] = useState(false)

  //Fonction de contrôle de la validité de l'adresse mail
  const isMail = () => {
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (mail !== "") {
      if (mail.match(regex)) {
        return true;
      } else {
        document.querySelector(".form-message").innerHTML = "";
        document.querySelector(".mail-error").innerHTML =
          "Adresse mail incorrect";
        return false;
      }
    }
  };

  // Fonction au submit du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    if (document.getElementById("notRobot").checked === true) {
      if (isMail() && message) {
        sendMsg("template_872e69q", {
          firstname: firstname,
          lastname: lastname,
          mail: mail,
          phone: phone,
          message: message,
          estateType: estateType,
          address: address,
          postalCode: postalCode,
          country: country,
        });
      } else {
        if (!mail || !message) {
          // il manque message ou mail ou les 2
          document.querySelector(".form-message").innerHTML =
            "Merci de remplir les champs requis";
          let labelField = document.getElementsByClassName("obligatoire");
          labelField.forEach((element) => {
            element.style.color = colors.secondary;
          });
        }
      }
    } else {
      document.querySelector(".form-message").innerHTML =
        "Merci de cocher la case indiquant que vous n'êtes pas un robot !";
    }
  };

  //Envoi du message
  const sendMsg = (templateId, variables) => {
    window.emailjs
      .send("service_y0u10dy", templateId, variables)
      .then((res) => {
        // Message de succès
        document.getElementById("msgSuccess").innerHTML =
          "Message envoyé avec succès !";
        setTimeout(() => {
          document.getElementById("msgSuccess").innerHTML = "";
        }, 10000);
        // On remet a zero les champs et messages d'erreurs
        setFirstname("");
        setLastname("");
        setMail("");
        setPhone("");
        setMessage("");
        setAddress("");
        setCountry("");
        setEstateType("");
        setPostalCode("");
        setNewsletter(false);
        document.querySelector(".mail-error").innerHTML = "";
        document.querySelector(".form-message").innerHTML = "";
        document.getElementById("newsletter").checked = false;
        document.getElementById("notRobot").checked = false;
      })
      .catch((err) => {
        document.querySelector(".mail-error").innerHTML = "";
        document.querySelector(".form-message").innerHTML =
          "Une erreur s'est produite, veuillez réessayer.";
      });
  };

  return (
    <Container className="container  ">
      <Head style={{ backgroundImage: `url(${background}` }}>
        <ContHeader>
          <div class="col-12 col-sm-10 col-md-8 col-lg-7 mx-auto mt-5">
            <HeadH1 className="text-center">Estimer votre bien</HeadH1>
            <Text>
              Une méthode fiable, fondée sur les données du marché et sur le
              savoir-faire de votre conseiller Sous Mon Toit :
              <ul>
                <li>Connaissance de votre quartier</li>
                <li>Compréhension des points forts de votre bien</li>
                <li>Analyse du marché</li>
              </ul>
              {/* <h5>À TRÈS VITE DANS NOTRE AGENCE ! </h5> */}
            </Text>
          </div>
        </ContHeader>
      </Head>
      <div className=" col-12 col-sm-10 col-md-8 col-lg-7 mx-auto mt-5">
        <ForSaleSuccess className="text-center" id="msgSuccess" />
        <ForSaleForm className="p-4 rounded row">
          <ForSaleH1 className="text-center">Contactez nous pour une estimation</ForSaleH1>
        
          <p className="text-dark">
            « Recevez une estimation personnalisée de votre bien par l'agence
            Sous Mon Toit à Amiens, ayant une parfaite connaissance de votre
            quartier et des particularités de son emplacement. »
          </p>
          <p className="text-dark">
            Merci de compléter le formulaire ci-dessous. Vous serez recontacté(e)
            par mail.
          </p>
          
          <div className="col-md-6">
            <div className="mb-3">
              <ForSaleLabel htmlFor="firstname" className="form-label">
                Type de bien
              </ForSaleLabel>
              <Select
                name="estateType"
                id="estateType"
                className="form-select"
                onChange={(e) => setEstateType(e.target.value)}
              >
                <Option value="">Type de bien</Option>
                {!loading &&
                  estatesTypes.map((item) => (
                    <Option value={item.estate_type_name} key={item.id}>
                      {item.estate_type_name}
                    </Option>
                  ))}
              </Select>
            </div>
            <div className="mb-3">
              <ForSaleLabel htmlFor="address" className="form-label">
                Adresse
              </ForSaleLabel>
              <StyledInput
                type="text"
                className="form-control"
                id="address"
                value={userData.address ? userData.address : address}
                name="address"
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <ForSaleLabel htmlFor="country" className="form-label">
                Ville
              </ForSaleLabel>
              <StyledInput
                type="text"
                className="form-control"
                id="country"
                value={userData.country ? userData.country : country}
                name="country"
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <ForSaleLabel htmlFor="postalCode" className="form-label">
                Code Postal
              </ForSaleLabel>
              <StyledInput
                type="text"
                className="form-control"
                id="postalCode"
                value={userData.postalCode ? userData.postalCode : postalCode}
                name="postalCode"
                onChange={(e) => setPostalCode(e.target.value)}
                maxLength="5"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <ForSaleLabel htmlFor="firstname" className="form-label">
                Prénom
              </ForSaleLabel>
              <StyledInput
                type="text"
                className="form-control"
                id="firstname"
                value={userData.firstname ? userData.firstname : firstname}
                name="firstname"
                onChange={(e) => setFirstname(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <ForSaleLabel htmlFor="lastname" className="form-label">
                Nom
              </ForSaleLabel>
              <StyledInput
                type="text"
                className="form-control"
                id="lastname"
                value={userData.lastname ? userData.lastname : lastname}
                name="lastname"
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <ForSaleLabel htmlFor="mail" className="form-label obligatoire">
                Adresse mail<ForSaleEtoile>*</ForSaleEtoile>
              </ForSaleLabel>
              <StyledInput
                type="email"
                className="form-control"
                id="mail"
                value={userData.mail ? userData.mail : mail}
                name="mail"
                onChange={(e) => setMail(e.target.value)}
                required
              />
              <div className="mail-error text-danger text-center" />
            </div>
            <div className="mb-3">
              <ForSaleLabel htmlFor="Phone" className="form-label">
                Téléphone
              </ForSaleLabel>
              <StyledInput
                type="Phone"
                className="form-control"
                id="Phone"
                value={userData.phone ? userData.phone : phone}
                onChange={(e) => setPhone(e.target.value)}
                name="Phone"
              />
            </div>
            <div className="mb-3">
              <ForSaleLabel
                htmlFor="message"
                className="form-label obligatoire"
              >
                Votre message<ForSaleEtoile>*</ForSaleEtoile>
              </ForSaleLabel>
              <StyledTextarea
                className="form-control"
                id="message"
                name="message"
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <div className="mb-3 form-check">
              <StyledInput
                type="checkbox"
                className="form-check-input text-light"
                id="newsletter"
                onChange={(e) => setNewsletter(e.target.value)}
                name="newsletter"
              />
              <label
                className="form-check-label text-dark"
                htmlFor="newsletter"
              >
                J’accepte de recevoir les lettres d’information de la société
                Sous Mon Toit.
              </label>
            </div>
            <div className="mb-3 form-check">
              <StyledInput
                type="checkbox"
                className="form-check-input text-light"
                id="notRobot"
                name="notRobot"
                required
              />
              <label className="form-check-label text-dark" htmlFor="notRobot">
                Je confirme que je ne suis pas un robot
                <ForSaleEtoile>*</ForSaleEtoile>
              </label>
            </div>
            <div className="text-danger fs-6">
              <ForSaleEtoile>*</ForSaleEtoile>Champs obligatoires
            </div>
            <StyledBtnPrimary
              type="submit"
              onClick={handleSubmit}
              className="btn float-end"
            >
              Envoyer
            </StyledBtnPrimary>
          </div>
          <div className="form-message text-danger fs-5 text-center" />
        </ForSaleForm>
      </div>
    </Container>
  );
};

ForSale.propTypes = {
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  mail: PropTypes.string.isRequired,
  phone: PropTypes.string,
  message: PropTypes.string,
  estateType: PropTypes.string,
  address: PropTypes.string,
  country: PropTypes.string,
  postalCode: PropTypes.string,
  newsletter: PropTypes.bool.isRequired,
};

ForSale.defaultProps = {
  firstname: "",
  lastname: "",
  mail: "",
  phone: "",
  message: "",
  estateType: "",
  address: "",
  country: "",
  postalCode: "",
  newsletter: false,
};

export default ForSale;
