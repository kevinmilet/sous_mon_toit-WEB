import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';

const SignInTest = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Adresse email invalide')
                .required('Champ requis'),
            password: Yup.string()
                .required('Champ requis'),
        }),
        onSubmit: async (values) => {
            await new Promise(r =>
                console.log((JSON.stringify(values, null, 2))));
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email">Email : </label>
            <input id="email"
                   name="email"
                   type="email"
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
                   value={formik.values.email}
            />
            {formik.errors.email ? <div>{formik.errors.email}</div> : null}

            <label htmlFor="password">Mot de passe : </label>
            <input id="password"
                   name="password"
                   type="password"
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
                   value={formik.values.password}
            />
            {formik.errors.password ? <div>{formik.errors.password}</div> : null}

            <button type="submit" className="btn btn-primary">Connexion</button>
        </form>
    );
};

export default SignInTest;
