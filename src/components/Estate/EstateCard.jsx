import styled from 'styled-components';
import React from 'react';
import PropTypes from "prop-types";
import {FavoriteButton, SliderStyle} from "../../utils/styles/Atoms";
import Slider from "../Tools/Slider/Slider";
import slides from "../../utils/styles/slidesArray";
import colors from "../../utils/styles/colors";

const CardFooter = styled.p`
    font-size: 13px;
    color: ${colors.primary}
`

const EstateRef = styled.span`
    color: ${colors.secondary};
    font-weight: 700 
`

const EstateCard = ({estateData}) => {

    return (
        <div>
            {estateData.map((item, i) => {
                    return (
                        <div key={i}>
                            <a className={"cardLink"} href="#">
                                <div className="my-3 card shadow-sm text-center">
                                    <div className="card-header">
                                        <div className={"d-flex justify-content-between"}>
                                            <EstateRef>{item.reference}</EstateRef> {item.price} €
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
                                    <SliderStyle>
                                        <div className="card-body position-relative">
                                            <Slider slides={slides}/>
                                        </div>
                                    </SliderStyle>
                                    <CardFooter>
                                        <div className="card-footer">
                                            <p className={"m-2"}>{item.zipcode} {item.city}</p>
                                            <p className={"m-2"}>
                                               {item.title} {item.living_surface} m<sup>2</sup>
                                            </p>
                                        </div>
                                    </CardFooter>
                                </div>
                            </a>
                        </div>
                    )
                }
            )}
        </div>
    );
};

EstateCard.propTypes = {
    price: PropTypes.number.isRequired,
    zipcode: PropTypes.string.isRequired,
    living_surface: PropTypes.number.isRequired
}

EstateCard.defaultProps = {
    price: 0,
    zipcode: '',
    living_surface: 0
}

export default EstateCard;
