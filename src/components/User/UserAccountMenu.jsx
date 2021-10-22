import React, {useContext} from "react";
import {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import colors from "../../utils/styles/colors";
import Loader from "../Tools/Loader/Loader";
import {Context} from "../../utils/context/Context";

const NavAccount = styled.div`
  .navbar {
    margin: auto;

    .tab {
      background-color: ${colors.secondaryBtn};
    }
  }
`;
const Ul = styled.ul`
  list-style: none
`

const TitleH3 = styled.h3`
  color: ${colors.primaryBtn}
`

const UserAccount = () => {
    const [customerData, setCustomerData] = useState({});
    const [customerTypeData, setCustomerTypeData] = useState({});
    const [loading, setLoading] = useState(true);

    axios.defaults.headers.common = {

        Authorization: `Bearer ${localStorage["token"]}`,
    };

    useEffect(() => {

        // Test de la validité du token
        axios.interceptors.response.use(function (response) {
            return response
        }, function (error) {
            if (error.response) {
                if (error.response.status === 401) {
                    localStorage.clear()
                    return window.location = '/connexion' // redirect to login page
                }
            }
        })

        axios.get(
            "http://api-sousmontoit.am.manusien-ecolelamanu.fr/public/customer/c/" +
            localStorage["userId"]
        )
            .then((res) => {
                setCustomerData(res.data);
            })
            .catch((error) => {
                console.log(error.message);
            })
            .finally(() => {
                setLoading(false);
            });

        axios
            .get(
                "http://api-sousmontoit.am.manusien-ecolelamanu.fr/public/describe_customer_type/joinCustomer/" + localStorage["userId"]
            )
            .then((res) => {
                setCustomerTypeData(res.data);
            })
            .catch((error) => {
                console.log(error.message);
            })
            .finally(() => {
                setLoading(false);
            });

    }, []);

    if (loading) {
        return <Loader/>;
    }
    return (
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg ">
                <div className="container ">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <NavAccount className="navbar-nav navbar m-auto">
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav navbar">
                                <a className="nav-link active" aria-current="page" href="/my-account">
                                    <div className="border border-light p-3 tab rounded-pill text-white">
                                        <b>Mes informations</b>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </NavAccount>
                </div>
            </nav>

            <div className="card col-lg-4 m-auto">
                <div className="card-body">
                    <TitleH3 className="card-title text-center text-decoration-underline">
                        Mes infos
                    </TitleH3>
                    <Ul>
                        <li className="mt-2">
                            <b>Prénom: </b> {customerData.firstname}
                        </li>
                        <li className="mt-2">
                            <b>Nom:</b> {customerData.lastname}
                        </li>
                        <li className="mt-2">
                            <b>Mail:</b> {customerData.mail}
                        </li>
                        <li className="mt-2">
                            <b>Date de naissance:</b> {customerData.birthdate}
                        </li>
                        <li className="mt-2">
                            <b>Télèphone:</b> {customerData.phone}
                        </li>
                        <li className="mt-2">
                            <b>Adresse:</b> {customerData.address}
                        </li>
                    </Ul>
                    <p>Si vous souhaitez modifier ou supprimer les informations de votre compte envoyez nous votre
                        demande par courrier à : sousmontoit-service@gmail.com </p>
                </div>
            </div>
        </div>
    );
};

export default UserAccount;
