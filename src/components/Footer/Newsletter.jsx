import React from 'react';
import './Newsletter.css'

const NewsLetter = () => {
    return (
        <form>
            <div className="mb-3">
                <label className="form-label">Inscription à la newsletter</label>
                <input type="email" placeholder="Adresse email" className="inputText"/>
            </div>
        </form>
    );
};

export default NewsLetter;
