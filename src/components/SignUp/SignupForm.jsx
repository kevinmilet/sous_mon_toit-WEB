import React, { useContext, useEffect } from "react";
import { Formik, Form, useField, useFormikContext } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import colors from '../../utils/styles/colors';
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

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <div className="mb-3">
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input form-control" {...field} {...props} />
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

  const API_URL = useContext(Context).apiUrl;
  const InsertCustomer = (values)=>{

      console.log(values);
      var firstname = values.firstname; 
      var lastname = values.lastname; 
      var mail = values.mail;
      var password = values.password; 
      var phone = "0874545555"; 
      var gender = "F";
      var first_met = false;

      axios.post(API_URL + ApiRoutes.create_customer, { lastname , firstname , mail , phone ,gender,first_met ,password})
      .then(res=>{
  
          alert("vous etes inscrit !")// a changer 
  
      }).catch(error => {
          console.log(error.message);
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
              .max(15, "Must be 15 characters or less")
              .required("Required"),
            lastname: Yup.string()
              .max(20, "Must be 20 characters or less")
              .required("Required"),
            mail: Yup.string()
              .email("Invalid email addresss`")
              .required("Required"),
            password: Yup.string()
              .required("Required"),
            acceptedTerms: Yup.boolean()
              .required("Required")
              .oneOf([true], "You must accept the terms and conditions."),
          })}
          onSubmit={async (values, { setSubmitting }) => {
            await new Promise(r => setTimeout(r, 500));
            setSubmitting(false);
            console.log(values);
            InsertCustomer(values);
          }}
        >
          <Form>
            <InscriptionH1 className="text-center" > Inscrivez-vous </InscriptionH1>
            <MyTextInput
              label="First Name"
              name="firstname"
              type="text"
              placeholder=""
            />
            <MyTextInput
              label="Last Name"
              name="lastname"
              type="text"
              placeholder=""
            />
            <MyTextInput
              label="Email Address"
              name="mail"
              type="mail"
              placeholder=""
            />
            <MyTextInput
              label="Password Address"
              name="password"
              type="password"
              placeholder=""
            />
            <MyCheckbox name="acceptedTerms">
              I accept the terms and conditions
            </MyCheckbox>
            <button type="submit" className="btn btn-primary">Inscription</button>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default SignupForm;