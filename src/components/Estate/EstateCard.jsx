import styled from 'styled-components';
import React from 'react';
import PropTypes from "prop-types";
import {FavoriteButton} from "../../utils/styles/Atoms";
import colors from "../../utils/styles/colors";
import defaultCover from '../../assets/img/estate_default.jpg';
import {Link} from "react-router-dom"
import ApiRoutes from "../../utils/const/ApiRoutes";

const Card = styled.div`
    // width: 18em;
    // height: 375px;
`

const CardBody = styled.div`
    font-size: 13px;
    color: ${colors.primary};
`

const EstateRef = styled.span`
    color: ${colors.secondary};
    font-weight: 700;
    text-transform: uppercase
`

const EstateCard = ({estateData}) => {
    return (
        estateData?.map(item => {

                return (
                    <div className='col-sm-12 col-md-4 col-lg-4 justify-content-center' key={item.id}>
                        <Link className='text-decoration-none ' to={`/detail-biens/${item.id_estate}`}>
                            <Card className="my-3 col-sm-8 col-md-auto m-auto card shadow-sm text-center">
                                <img src={(ApiRoutes.IMG_ESTATE_URL + item.name) ?? defaultCover} alt={item.name ?? defaultCover} 
                                    className="card-img-top img-fluid"
                                    height="200px"/>
                                <CardBody>
                                    <div className="card-body">
                                        <div className={"d-flex justify-content-between"}>
                                            <EstateRef>{item.reference}</EstateRef>
                                            <FavoriteButton>
                                                <label className="add-fav">
                                                    <input type="checkbox"/>
                                                    <i className="fas fa-heart">
                                                        <i className="fas fa-plus-circle"/>
                                                    </i>
                                                </label>
                                            </FavoriteButton>
                                        </div>
                                        <div className="mt-2">
                                            <p className="text-lg-start">
                                                {item.title} {item.living_surface} m<sup>2</sup>
                                            </p>
                                            <p className="text-lg-start">
                                                {item.zipcode} {item.city}
                                            </p>
                                            <p className="text-lg-end fw-bold">
                                                {item.price} €
                                            </p>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Link>
                    </div>
                )
            }
        ))
};

EstateCard.propTypes = {
    price: PropTypes.number.isRequired,
    zipcode: PropTypes.string.isRequired,
    living_surface: PropTypes.number.isRequired,
    estateCover: PropTypes.string.isRequired,
    id_estate: PropTypes.number.isRequired
}

EstateCard.defaultProps = {
    price: 0,
    zipcode: '',
    living_surface: 0,
    estateCover: defaultCover,
    id_estate: 0
}

export default EstateCard;
