import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import styled from "styled-components";
import ApiRoutes from "../../utils/const/ApiRoutes";
import Loader from "../Tools/Loader/Loader";
import EstateCard from "./EstateCard";
import {Context} from "../../utils/context/Context";

const CardContainer = styled.div`
    margin: 25px
`

const EstatesRnd = () => {
    const API_URL = useContext(Context).apiUrl;
    const [estateData, setEstateData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(API_URL + ApiRoutes.estates_rnd).then(res => {
            setEstateData(res.data)
        }).catch(error => {
            console.log(error.message)
        }).finally(() => {
            setLoading(false)
        })
    }, [])
    return (
        loading ? <Loader/> :

            <CardContainer className="d-flex flex-row flex-md-row justify-content-evenly">
                <div className="row">
                    <EstateCard estateData={estateData}/>
                </div>
            </CardContainer>
    );
}

export default EstatesRnd;
