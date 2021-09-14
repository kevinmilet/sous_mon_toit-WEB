import React from 'react';
import {Form} from "react-bootstrap";
import './Newsletter.css'

const NewsLetter = () => {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="newsLetterText">Inscription à la newsletter</Form.Label>
                <Form.Control type="email" placeholder="Adresse email" className="inputText"/>
            </Form.Group>
        </Form>
    );
};

export default NewsLetter;
