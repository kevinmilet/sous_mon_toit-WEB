import React, { useContext, useState } from "react";
import { Formik, Field, Form, useField } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import colors from '../../utils/styles/colors';
import axios from 'axios';
import ApiRoutes from "../../utils/const/ApiRoutes";
import { Context } from "../../utils/context/Context";
import { StyledBtnPrimary, StyledInput } from "../../utils/styles/Atoms";

const InscriptionFormDiv = styled.div`
    background-color: ${colors.backgroundPrimary};
    -webkit-box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    -moz-box-shadow:    0px 3px 6px rgba(0, 0, 0, 0.16);
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
`
const SignUpSuccess = styled.p`
    color : white;
    font-size: 2rem;
    display : none;
`
const InscriptionH1 = styled.h1`
    color: ${colors.secondary};
`
const InscriptionLabel = styled.label`
    color: ${colors.secondaryBtn};
`
const MyTextInput = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and alse replace ErrorMessage entirely.
    const [field, meta] = useField(props);
    return (
        <>
            <div className="mb-3">
                <InscriptionLabel className="form-label">{label}</InscriptionLabel>
                <StyledInput className="text-input form-control" {...field} {...props} />
                {meta.touched && meta.error ? (
                    <div className="error" style={{ color: "#E85A70", fontStyle: 'italic' }}>{meta.error}</div>
                ) : null}
            </div>
        </>
    );
};

const MyCheckbox = ({ children, ...props }) => {
    const [field, meta] = useField({ ...props, type: "checkbox" });
    return (
        <>
            <label className="checkbox">
                <input {...field} {...props} type="checkbox" />
                {children}
            </label>
            {meta.touched && meta.error ? (
                <div className="error" style={{ color: "#E85A70", fontStyle: 'italic' }}>{meta.error}</div>
            ) : null}
        </>
    );
};

const SignupForm = () => {

    const [errorMail, setErrorMail] = useState("");
    const [errorPassword, setErrorPassword] = useState("")
    const API_URL = useContext(Context).apiUrl;
    const InsertCustomer = (values) => {

        // On reset les messages d'erreurs
        setErrorMail("");
        setErrorPassword("");

        //On set les valeurs a envoyer
        const firstname = values.firstname;
        const lastname = values.lastname;
        const mail = values.mail;
        const password = values.password;
        const gender = values.gender;
        const phone = values.phone;
        //Valeurs par défaut
        const first_met = false;

        axios.post(API_URL + ApiRoutes.create_customer, { lastname, firstname, mail, phone, gender, first_met, password })
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
                if (error.response.data.mail && error.response.data.mail[0] === "The mail has already been taken.") {
                    setErrorMail("Cette adresse mail est déja prise.");
                }
                if (error.response.data.password && error.response.data.password[0] === "The password format is invalid.") {
                    setErrorPassword("Le mot de passe doit comporter au minimum 8 caractères (dont masjuscule, minuscule , chiffre et caractères spéciaux).")
                }
            })
    }
    return (
        <>
            <div className="container col-12 col-sm-10 col-md-8 col-lg-4 mx-auto mt-5">
                <Formik
                    initialValues={{
                        gender: '',
                        firstname: "",
                        lastname: "",
                        mail: "",
                        password: "",
                        phone: "",
                        acceptedTerms: false, // added for our checkbox
                    }}
                    validationSchema={Yup.object({
                        gender: Yup.string()
                            .required("Champs requis"),
                        firstname: Yup.string()
                            .max(15, "15 caractères maximum")
                            .required("Champs requis"),
                        lastname: Yup.string()
                            .max(20, "20 caractères maximum")
                            .required("Champs requis"),
                        mail: Yup.string()
                            .email("Adresse mail invalide")
                            .required("Champs requis"),
                        password: Yup.string()
                            .required("Champs requis"),
                        phone: Yup.string()
                            .max(10, "10 caractères maximum"),
                        acceptedTerms: Yup.boolean()
                            .required("Champs requis")
                            .oneOf([true], "Vous devez accepter les conditions d'utilisation"),
                    })}
                    onSubmit={async (values, { setSubmitting }) => {
                        await new Promise(r => setTimeout(r, 500));
                        setSubmitting(false);
                        InsertCustomer(values);
                    }}
                >
                    <div>
                        <SignUpSuccess className="text-center p-4 bg-success" id="msgSuccess" />
                        <InscriptionFormDiv className="p-4 rounded">
                            <Form>
                                <InscriptionH1 className="text-center"> Inscrivez-vous </InscriptionH1>
                                <InscriptionLabel className="form-label">Civilité</InscriptionLabel><br />
                                <div className="form-check form-check-inline">
                                    <label className="form-check-label">
                                        <Field type="radio" className="form-check-input" name="gender" value="F" />
                                        Madame
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <label className="form-check-label">
                                        <Field type="radio" className="form-check-input" name="gender" value="H" />
                                        Monsieur
                                    </label>
                                </div>
                                <MyTextInput
                                    label="Prénom"
                                    name="firstname"
                                    type="text"
                                    placeholder=""
                                />
                                <MyTextInput
                                    label="Nom"
                                    name="lastname"
                                    type="text"
                                    placeholder=""
                                />
                                <MyTextInput
                                    label="Adresse mail"
                                    name="mail"
                                    type="mail"
                                    placeholder=""
                                />
                                <div className="error" style={{ color: "#E85A70", fontStyle: 'italic' }}>{errorMail}</div>
                                <MyTextInput
                                    label="Téléphone"
                                    name="phone"
                                    type="text"
                                    placeholder=""
                                />
                                <MyTextInput
                                    label="Mot de passe"
                                    name="password"
                                    type="password"
                                    placeholder=""
                                />
                                <div className="error" style={{ color: "#E85A70", fontStyle: 'italic' }}>{errorPassword}</div>
                                <MyCheckbox name="acceptedTerms">
                                    J'accepte les conditions d'utilisation du site SousMonToit
                                </MyCheckbox>
                                <StyledBtnPrimary type="submit" className="btn mt-3">Inscription</StyledBtnPrimary>
                            </Form>
                        </InscriptionFormDiv>
                    </div>
                </Formik>
            </div>
        </>
    );
};

export default SignupForm;
