import React, {useContext, useEffect, useState} from 'react';
import styled from 'styled-components';
import EstateMap from "../../components/Estate/EstateMap";
import EstateCard from "../../components/Estate/EstateCard";
import axios from "axios";
import Loader from "../../components/Tools/Loader/Loader";
import ApiRoutes from "../../utils/const/ApiRoutes";
import {Context} from "../../utils/context/Context";
import SearchBar from "../../components/SearchBar/SearchBar";
import colors from "../../utils/styles/colors";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

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

const Title = styled.div`
    text-align: center;
    color: ${colors.primaryBtn};
    margin: 2em auto 0 auto
`

const EstatesListView = (props) => {
    const {search, estateSearch} = props;
    const API_URL = useContext(Context).apiUrl;
    const [estateData, setEstateData] = useState({});
    const [loading, setLoading] = useState(true);

    // const [page, setPage] = useState(null);
    // const [currentPage, setCurrentPage] = useState(0);
    // const [totalPage, setTotalPage] = useState(null);

    useEffect(() => {
        if (!estateSearch) {
            axios.get(API_URL + ApiRoutes.estates).then(res => {
                setEstateData(res.data)
            }).catch(error => {
                console.log(error.message)
            }).finally(() => {
                setLoading(false)
            })
        } else {
            setEstateData(estateSearch);
            setLoading(false)
        }
    }, [API_URL, estateSearch])

    // const paginate = (data) => {
    //     let page_size = 6;
    //     let page_number = data.length / 6;
    //     // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
    //     console.log(data.slice((page_number - 1) * page_size, page_number * page_size));
    //     return data.slice((page_number - 1) * page_size, page_number * page_size);
    // }

    if (estateData.length !== 0) {
        return (

        loading ? (<Loader/>) : (
                <>
                    <Header/>
                    <Title>
                        <h4>Nous avons trouvé {estateData.length} bien(s) correspondant(s) à votre recherche.</h4>
                    </Title>
                    <div className="row mb-4">
                        <SearchBar search={search}/>
                    </div>
                    <BlockListing className="row m-3">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 listing">
                            <EstateMap estateData={estateData}/>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-8">
                            <div className="row">
                                <EstateCard estateData={estateData}/>
                            </div>
                        </div>
                    </BlockListing>
                    <Footer/>
                </>
            )
        );
    } else {
        return (
            <>
                <Header/>
                <Title>
                    <h4>La recherche n'a donnée aucun résultat.</h4>
                </Title>
                <div className="row mb-4">
                    <SearchBar search={search}/>
                </div>
                <Footer/>
            </>
        )
    }

};

export default EstatesListView;
