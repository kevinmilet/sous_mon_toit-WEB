import React, {useContext, useState} from 'react';
import styled from "styled-components";
import colors from '../../utils/styles/colors';
import axios from 'axios';
import {Context} from "../../utils/context/Context";
import ApiRoutes from "../../utils/const/ApiRoutes";
import {StyledBtnPrimary, StyledInput} from "../../utils/styles/Atoms";
import {useFormik} from "formik";
import * as Yup from "yup";

const ConnexionForm = styled.form`
    background-color: ${colors.backgroundPrimary};
    -webkit-box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    -moz-box-shadow:    0px 3px 6px rgba(0, 0, 0, 0.16);
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
`
const ConnexiontH1 = styled.h1`
    color: ${colors.secondary};
`
const ConnexionLabel = styled.label`
    color: ${colors.secondaryBtn};
`

const SignIn = () => {
    const API_URL = useContext(Context).apiUrl;
    const [errorLogin, setErrorLogin] = useState("");

    const formik = useFormik({
        initialValues: {
            mail: '',
            password: ''
        },
        validationSchema: Yup.object({
            mail: Yup.string()
                .email('Adresse email invalide')
                .required('Champ requis'),
            password: Yup.string()
                .required('Champ requis'),
        }),
        onSubmit: async (values) => {
            await new Promise(r => {
                login(values)
            })
        }
    })

    const login = (values) => {
        setErrorLogin("");
        console.log(values);
        axios.post(API_URL + ApiRoutes.login, values)
            .then(res => {
                console.log(res)
                localStorage['token'] = res.data.token; // enregistrement du token dans le local storage
                localStorage['userId'] = res.data.user.id; // neregistrement de l'id user
                window.location.href = '/';
            }).catch(error => {
            console.log(error);
            if (error.response.data.message == "Unauthorized"){
                setErrorLogin("Login ou mot de passe incorrect");
            }
        })
    };

    return (
        <div className="container col-12 col-sm-10 col-md-8 col-lg-4 mx-auto mt-5">
            <ConnexionForm onSubmit={formik.handleSubmit} className="p-4 rounded">
                <ConnexiontH1 className="text-center">Connectez-vous</ConnexiontH1>
                <div className="mb-3">
                    <ConnexionLabel htmlFor="email" className="form-label">Adresse email</ConnexionLabel>
                    <StyledInput id="mail"
                                 name="mail"
                                 type="email"
                                 className="form-control"
                                 onChange={formik.handleChange}
                                 onBlur={formik.handleBlur}
                                 value={formik.values.email}
                    />
                </div>
                {formik.errors.mail ? <div style={{color: "#E85A70", fontStyle: 'italic'}} className="mb-2">{formik.errors.mail}</div> :null}

                <div className="mb-3">
                    <ConnexionLabel htmlFor="password" className="form-label">Mot de passe</ConnexionLabel>
                    <StyledInput id="password"
                                 name="password"
                                 type="password"
                                 className="form-control"
                                 onChange={formik.handleChange}
                                 onBlur={formik.handleBlur}
                                 value={formik.values.password}
                    />
                </div>
                {formik.errors.password ? <div style={{color: "#E85A70", fontStyle: 'italic'}} className="mb-2">{formik.errors.password}</div> : null}
                <div className="error" style={{ color: "#E85A70", fontStyle: 'italic' }}>{errorLogin}</div>
                <StyledBtnPrimary type="submit" className="btn mt-3">Connexion</StyledBtnPrimary>
                <p className="mt-4">Pas encore inscrit ? <a href="/inscription"> Inscrivez-vous !</a></p>
            </ConnexionForm>
        </div>
    );
};

export default SignIn;