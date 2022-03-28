import React, {useContext} from "react";
import {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import colors from "../../utils/styles/colors";
import Loader from "../Tools/Loader/Loader";
import {Context} from "../../utils/context/Context";
import {Formik, Field, Form, useField} from "formik";
import * as Yup from "yup";
import {StyledBtnPrimary, StyledInput} from "../../utils/styles/Atoms";

const InscriptionFormDiv = styled.div`
    background-color: ${colors.backgroundPrimary};
    -webkit-box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    -moz-box-shadow:    0px 3px 6px rgba(0, 0, 0, 0.16);
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
`
const InscriptionH1 = styled.h1`
    color: ${colors.secondary};
`
const InscriptionLabel = styled.label`
    color: ${colors.secondaryBtn};
`
const MyTextInput = ({label, ...props}) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and alse replace ErrorMessage entirely.
    const [field, meta] = useField(props);
    return (
        <>
            <div className="mb-3">
                <InscriptionLabel className="form-label">{label}</InscriptionLabel>
                <StyledInput className="text-input form-control" {...field} {...props} />
                {meta.touched && meta.error ? (
                    <div className="error" style={{color: "#E85A70", fontStyle: 'italic'}}>{meta.error}</div>
                ) : null}
            </div>
        </>
    );
};

const MyCheckbox = ({children, ...props}) => {
    const [field, meta] = useField({...props, type: "checkbox"});
    return (
        <>
            <label className="checkbox">
                <input {...field} {...props} type="checkbox"/>
                {children}
            </label>
            {meta.touched && meta.error ? (
                <div className="error" style={{color: "#E85A70", fontStyle: 'italic'}}>{meta.error}</div>
            ) : null}
        </>
    );
};

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

const UserUpdateAccount = () => {

    const UpdateCustomer = (values) => {

        // On reset les messages d'erreurs
      

        //On set les valeurs a envoyer
        const firstname = values.firstname;
        const lastname = values.lastname;
        const mail = values.mail;
        // const password = values.password;
        // const gender = values.gender;
        // const phone = values.phone;
        // //Valeurs par défaut
        // const first_met = false;

        axios.put(API_URL + "customer/c/update/" + localStorage["userId"]
        , { lastname, firstname, mail})
            // axios.post("http://localhost:8000/customer/create", { lastname , firstname , mail , phone ,gender,first_met ,password})
            .then(res => {
                // Message de succès
                window.scrollTo(0, 0);
                document.getElementById('msgSuccess').style.cssText = "display: flex;";
                document.getElementById('msgSuccess').innerHTML = "Vous êtes inscrit avec succès ! Vous allez être redirigé vers la page de connexion ...";
                setTimeout(() => {
                    // document.getElementById('msgSuccess').innerHTML = "";
                    window.location.href = '/connexion';
                }, 10000);

            }).catch(error => {
                
            })
    }
    
    const [errorMail, setErrorMail] = useState("");
    const [errorPassword, setErrorPassword] = useState("")
    const API_URL = useContext(Context).apiUrl;
  
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
        <div className="container col-12 col-sm-10 col-md-8 col-lg-4 mx-auto mt-5">
        <Formik
            initialValues={{
                // gender: customerData.gender,
                firstname: customerData.firstname,
                lastname: customerData.lastname,
                mail: customerData.mail,
                // password: "",
                // acceptedTerms: false, // added for our checkbox
            }}
            validationSchema={Yup.object({
             
                firstname: Yup.string()
                    .max(15, "15 caractères maximum")
                    .required("Champs requis"),
                lastname: Yup.string()
                    .max(20, "20 caractères maximum")
                    .required("Champs requis"),
                mail: Yup.string()
                    .email("Adresse mail invalide")
                    .required("Champs requis"),
               
            })}
            onSubmit={async (values, {setSubmitting}) => {
                await new Promise(r => setTimeout(r, 500));
                setSubmitting(false);
                UpdateCustomer(values);
            }}
        >
            <InscriptionFormDiv className="p-4 rounded">
                <Form>
                    <InscriptionH1 className="text-center">Modification</InscriptionH1>
                    <MyTextInput
                   value={customerData.firstname}
                        label="Prénom"
                        name="firstname"
                        type="text"
                        placeholder=""
                    />
                    <MyTextInput
                    value={customerData.lastname}
                        label="Nom"
                        name="lastname"
                        type="text"
                        placeholder=""
                    />
                    <MyTextInput
                    value={customerData.mail}
                        label="Adresse mail"
                        name="mail"
                        type="mail"
                        placeholder=""
                    />
                   
                    <StyledBtnPrimary type="submit" className="btn">Envoyer</StyledBtnPrimary>
                </Form>
            </InscriptionFormDiv>
        </Formik>
    </div>
        
    );
};

export default UserUpdateAccount;