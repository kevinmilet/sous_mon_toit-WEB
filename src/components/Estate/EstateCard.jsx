import styled from 'styled-components';
import React, {useContext, useEffect, useState} from 'react';
import PropTypes from "prop-types";
import {FavoriteButton} from "../../utils/styles/Atoms";
import colors from "../../utils/styles/colors";
import {Context} from "../../utils/context/Context";
import axios from "axios";
import ApiRoutes from "../../utils/const/ApiRoutes";
import Loader from "../Tools/Loader/Loader";
import defaultCover from '../../assets/img/estate_default.jpg';

const Card = styled.div`
    width: 18em;
    height: 375px;
`

const CardLink = styled.a`
    text-decoration: none;
`

const CardBody = styled.p`
    font-size: 13px;
    color: ${colors.primary};
`

const EstateRef = styled.span`
    color: ${colors.secondary};
    font-weight: 700;
    text-transform: uppercase
`

const EstateCard = ({estateData}) => {
    const API_URL = useContext(Context).apiUrl;
    const [estateCover, setEstateCover] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(API_URL + ApiRoutes.estates_cover + "/" + estateData.id).then(res => {
            if (res.data.length !== 0) {
                console.log(res.data)
                setEstateCover(res.data.name)
            } else {
                setEstateCover(defaultCover);
            }
        }).catch(error => {
            console.log('coucou')
            setEstateCover(defaultCover);
            console.log(error.message)
        }).finally(() => {
            setLoading(false)
        })
    }, [API_URL, estateData.id])

    return (
        loading ? <Loader/> :

            estateData.map((item) => {
                return (<div className='col-sm-12 col-md-4 col-lg-4'>
                    <CardLink href="#" key={item.id}>
                        <Card className="my-3 card shadow-sm text-center">
                            <img src={estateCover} alt="" className="card-img-top img-fluid" height="200px"/>
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
                    </CardLink>
                </div>)
            })
    )
};

EstateCard.propTypes = {
    price: PropTypes.number.isRequired,
    zipcode: PropTypes.string.isRequired,
    living_surface: PropTypes.number.isRequired,
    estateCover: PropTypes.string.isRequired
}

EstateCard.defaultProps = {
    price: 0,
    zipcode: '',
    living_surface: 0,
    estateCover: defaultCover
}

export default EstateCard;
