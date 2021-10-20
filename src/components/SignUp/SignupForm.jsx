import React, { useContext, useEffect,  useState } from "react";
import { Formik, Form, useField, useFormikContext } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import colors from '../../utils/styles/colors';
import axios from 'axios';
import ApiRoutes from "../../utils/const/ApiRoutes";
import {Context} from "../../utils/context/Context";
import {StyledBtnPrimary, StyledInput} from "../../utils/styles/Atoms";
import { Redirect } from "react-router-dom";

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
        <div className="error">{meta.error}</div>
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
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

// Styled components ....

const StyledErrorMessage = styled.div`
  font-size: 12px;
  color: var(--red-600);
  width: 400px;
  margin-top: 0.25rem;
  &:before {
    content: "❌ ";
    font-size: 10px;
  }
  @media (prefers-color-scheme: dark) {
    color: var(--red-300);
  }
`;

const StyledLabel = styled.label`
  margin-top: 1rem;
`;

// And now we can use these
const SignupForm = () => {

  const [errorMail, setErrorMail] = useState("");
  const [errorPassword, setErrorPassword] = useState("")
  const API_URL = useContext(Context).apiUrl;
  const InsertCustomer = (values)=>{

      console.log(values);
      const firstname = values.firstname;
      const lastname = values.lastname;
      const mail = values.mail;
      const password = values.password;
      const phone = "0874545555";
      const gender = "F";
      const first_met = false;

      axios.post(API_URL + ApiRoutes.create_customer, { lastname , firstname , mail , phone ,gender,first_met ,password})
      // axios.post("http://localhost:8000/customer/create", { lastname , firstname , mail , phone ,gender,first_met ,password})
      .then(res=>{
  
          alert("vous etes inscrit !")// a changer 
          // window.location.href = '/connexion';

      }).catch(error => {
          if (error.response.data.mail === "The mail has already been taken."){
              setErrorMail("Cette adresse mail est déja prise.");
          }
          if (error.response.data.password === "The password format is invalid."){
              setErrorPassword("Le mot de passe doit comporter au minimum 8 caractères (dont masjuscule, minuscule , chiffre et caractères spéciaux).")
          }
      })
  }
  return (
    <>
      <div className="w-25 mx-auto mt-5">   
        <Formik
          initialValues={{
            firstname: "",
            lastname: "",
            mail: "",
            password: "",
            acceptedTerms: false, // added for our checkbox
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
            password: Yup.string()
              .required("Champs requis"),
            acceptedTerms: Yup.boolean()
              .required("Champs requis")
              .oneOf([true], "Vous devez accepter les conditions d'utilisation"),
          })}
          onSubmit={async (values, { setSubmitting }) => {
            await new Promise(r => setTimeout(r, 500));
            setSubmitting(false);
            console.log(values);
            InsertCustomer(values);
          }}
        >
          <InscriptionFormDiv className="p-4 rounded">
            <Form>
              <InscriptionH1 className="text-center" > Inscrivez-vous </InscriptionH1>
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
              <div className="error">{errorMail}</div>
              <MyTextInput
                label="Mot de passe"
                name="password"
                type="password"
                placeholder=""
              />
              <div className="error">{errorPassword}</div>
              <MyCheckbox name="acceptedTerms">
                  J'accepte les conditions d'utilisations du site SousMonToit
              </MyCheckbox>
              <StyledBtnPrimary type="submit" className="btn">Inscription</StyledBtnPrimary>
            </Form>
          </InscriptionFormDiv>
        </Formik>
      </div>
    </>
  );
};

export default SignupForm;