import React, { useContext, useEffect, useState } from 'react';
import styled from "styled-components";
import colors from '../../utils/styles/colors';
import { Formik, Field, Form, insert } from "formik";
import axios from 'axios';
import ApiRoutes from "../../utils/const/ApiRoutes";
import {Context} from "../../utils/context/Context";

const InscriptionForm = styled.form`
    background-color: ${colors.backgroundSecondary};
`
const InscriptionH1 = styled.h1`
    color: ${colors.secondary};
`
const InscriptionLabel = styled.label`
    color: ${colors.secondaryBtn};
`
const InscriptionBtn = styled.button`
    background-color: ${colors.primaryBtn};
    color: #fff;
`


const SignUp = () => {

    const API_URL = useContext(Context).apiUrl;
    const InsertCustomer = (values)=>{

        console.log(values);
    
        axios.post(API_URL + ApiRoutes.create_customer, { values })
        .then(res=>{
    
            alert("vous etes inscrit !")// a changer 
    
        }).catch(error => {
            console.log(error.message);
        })
    }
    return (
        <div className="w-25 mx-auto mt-5">   
            <Formik
                initialValues={{ firstname: "", lastname: "", mail: "" , password:"" }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    if (!values.password) {
                        errors.email = 'Required';
                    } else if (
                        // !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        console.log('mot de passe ok')
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    console.log('je passe ici ?')
                    setTimeout(() => {
                        console.log('je passe la ?')
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                        // InsertCustomer(values);
                    }, 200);
                }}
                >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <InscriptionForm className="p-4 rounded" onSubmit={handleSubmit}>
                        <InscriptionH1 className="text-center" > Inscrivez-vous </InscriptionH1>
                        <div className="mb-3">
                            <InscriptionLabel htmlFor="firstname" className="form-label">Prénom</InscriptionLabel>
                            <input type="text" className="form-control" id="firstname" name="firstname" onChange={handleChange} onBlur={handleBlur} value={values.email} required />
                            {errors.firstname && touched.firstname && errors.firstname}
                        </div>
                        <div className="mb-3">
                            <InscriptionLabel htmlFor="lastname" className="form-label">Nom</InscriptionLabel>
                            <input type="text" className="form-control" id="lastname" name="lastname" onChange={handleChange} onBlur={handleBlur} value={values.email} required />
                            {errors.lastname && touched.lastname && errors.lastname}
                        </div>
                        <div className="mb-3">
                            <InscriptionLabel for="mail" className="form-label">Adresse mail</InscriptionLabel>
                            <input type="email" className="form-control" id="mail" name="mail" onChange={handleChange} onBlur={handleBlur} value={values.email}/>
                            {errors.mail && touched.mail && errors.mail}
                        </div>
                        <div className="mb-3">
                            <InscriptionLabel for="password" className="form-label">Mot de passe</InscriptionLabel>
                            <input type="password" className="form-control" id="password" name="password" onChange={handleChange} onBlur={handleBlur} value={values.email}/>
                            {errors.password && touched.password && errors.password}
                        </div>
                        <button type="submit" disabled={isSubmitting} className="btn">Inscription</button>
                    </InscriptionForm>
                )}
            </Formik>

        </div>
    );
};

export default SignUp;