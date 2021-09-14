import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

const CardImage = styled.img`
  height: auto;
  width: 100%;
`

const FavoriteButton = styled.div`
  .add-fav {
    cursor: pointer;
    transition: all .5s ease;
    
  .fa-heart {
    font-size: 24px;
    color: #454552;
    position: relative;
    transition: all .5s ease-in-out;
  }
  .fa-plus-circle {
    font-size: 9px;
    color: #454552;
    background: #ffffff;
    border-radius: 100%;
    position: absolute;
    bottom: 5px;
    right: 2px;
    line-height: 9px;
    text-align: center;
    -webkit-transition: all 1s ease-in-out;
    -webkit-transition: all 1s ease-in-out;
    -webkit-transition: all .5s ease-in-out;
    transition: all .5s ease-in-out;
  }
  input[type="checkbox"] { 
    position: absolute;
    opacity: 0;
    &:checked + .fa-heart {
      color: #E85A70;
      .fa-plus-circle {
        opacity: 0;
        transition: all .5s ease-in-out;
      }
    }
  }
}
`

const EstateCard = () => {
    return (
        <div>
            <div className="card text-center w-25">
                <div className="card-header">
                    <div className={"d-flex justify-content-between"}>
                        299 000 €
                        <FavoriteButton>
                            <label className="add-fav">
                                <input type="checkbox"/>
                                <i className="fas fa-heart">
                                    <i className="fas fa-plus-circle"/>
                                </i>
                            </label>
                        </FavoriteButton>
                    </div>
                </div>
                <CardImage src={"https://i.ibb.co/4WN1sny/pexels-binyamin-mellish-106399.jpg"}
                           alt="bien immobilier n° 1469"/>
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
