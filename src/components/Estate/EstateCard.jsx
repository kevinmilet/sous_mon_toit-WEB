import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

const CardImage = styled.img`
  height: auto;
  width: 100%;
`

const EstateCard = () => {
    return (
        <div>
            <div className="card text-center w-25">
                <div className="card-header">
                    <div className={"d-flex justify-content-between"}>
                        299 000 €
                        <i className="far fa-heart"/>
                    </div>
                </div>
                <CardImage src={"https://i.ibb.co/4WN1sny/pexels-binyamin-mellish-106399.jpg"} alt="bien immobilier n° 1469" />
                <div className="card-body">
                    {/* TODO slider */}
                </div>
                <div className="card-footer text-muted">
                    <p className={"text-uppercase text-dark m-2"}>60240 Chaumont</p>
                    <p className={"text-uppercase text-dark m-2"}>
                        À vendre maison 10 pièces 230 m<sup>2</sup>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default EstateCard;
