import React, {useContext, useEffect, useState} from 'react';
import styled from 'styled-components';
import EstateMap from "../../components/Estate/EstateMap";
import EstateCard from "../../components/Estate/EstateCard";
import axios from "axios";
import Loader from "../../components/Tools/Loader/Loader";
import ApiRoutes from "../../utils/const/ApiRoutes";
import {Context} from "../../utils/context/Context";
import SearchBar from "../../components/SearchBar/SearchBar";

const BlockListing = styled.div`
  .listing {
    position: relative;

        &:before {
            content: "";
            display: table;
        }

        &:after {
            content: "";
            display: table;
        }

        &:after {
            clear: both;
        }

        .leaflet-container {
            height: 100vh;
        }
  }
`

const EstatesListView = () => {
    const API_URL = useContext(Context).apiUrl;
    const [estateData, setEstateData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(API_URL + ApiRoutes.estates).then(res => {
            setEstateData(res.data)
        }).catch(error => {
            console.log(error.message)
        }).finally(() => {
            setLoading(false)
        })
    }, [API_URL])

    return (

        loading ? (<Loader/>) : (
            <>
                <div className="row mt-0 mb-4">
                    <SearchBar/>
                </div>
                <BlockListing className="row m-3">
                    <div className="col-sm-12 col-md-4 col-lg-4 listing">
                        <EstateMap estateData={estateData}/>
                    </div>
                    <div className="col-sm-12 col-md-8 col-lg-8">
                        <div className="row">
                            <EstateCard estateData={estateData}/>
                        </div>
                    </div>
                </BlockListing>
            </>
        )
    );
};

export default EstatesListView;
