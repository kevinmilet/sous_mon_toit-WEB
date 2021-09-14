import React from 'react';
import styled from "styled-components";
import colors from "../../utils/colors";

const NewsletterLabel = styled.label`
    font-size: 16px;
    color: ${colors.backgroundPrimary};
    margin-left: 20px;
    margin-bottom: 2px;
`
const NewsletterInput = styled.input`
    width: 320px;
    height: 40px;
    border: none;
    border-radius: 50px;
    &::placeholder {
        text-align: center;
       }
`
const NewsLetter = () => {
    return (
        <form>
            <div className="mb-3">
                <NewsletterLabel className="form-label">Inscription à la newsletter</NewsletterLabel>
                <NewsletterInput type="email" placeholder="Adresse email" className="form-control inputText" name="newsletterEmail" id="newsletterEmail"/>
            </div>
        </form>
    );
};

export default NewsLetter;
