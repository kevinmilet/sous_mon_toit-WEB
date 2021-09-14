import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

const EstateCard = () => {
    return (
        <div>
            <ul>
                <li className={"nav-link"}>
                    <Link to={'/'}>Accueil</Link>
                </li>
            </ul>

            <div className={"container"}>
                <div className={"card w-25"}>
                    <div className={"card-top"}>
                        <img src="/images/heart.png" alt="favoris"/>
                    </div>

                    <div className={"bottom"}>
                        <h3 className={"m-2"}>299 000 €</h3>
                        <img src="https://i.ibb.co/rf2TbH8/home-office-5006842-1280.png"
                             className={"img-thumbnail"}
                             alt="bien immobilier n° 1469"/>
                        <h2 className={"title h6 text-uppercase m-2"}>60240 Chaumont</h2>
                        <p className={"text text-uppercase m-2"}>
                            À vendre maison 10 pièces 230 m<sup>2</sup>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EstateCard;
