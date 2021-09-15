import React, {useContext, useEffect, useState} from 'react';
import styled from "styled-components";
import colors from "../../utils/styles/colors";
import axios from "axios";
import {ApiUrlsContext} from "../../utils/context/ApiUrlsContext";
import ApiRoutes from "../../utils/const/ApiRoutes";



const SearchContainer = styled.div`
    width: 1100px;
    height: 75px;
    background-color: ${colors.secondaryBtn};
    border: none;
    border-radius: 50px;
`
const Sector = styled.input`
    width: 100%;
    height: 75px;
    text-align: center;
    background: transparent;
    border: none;
    text-align: center;
    &::placeholder {
        text-align: center;
        color: ${colors.backgroundPrimary};
        font-weight: bold;
    }
`
const Type = styled.select`
`

const SearchBar = () => {
    const API_URL = useContext(ApiUrlsContext).apiUrl;
    const [loading, setLoading] = useState(true);
    const [estatesTypes, setEstatesTypes] = useState({});
    useEffect(() => {
        axios.get(API_URL+ApiRoutes.estates_types).then(response => {
            setEstatesTypes(response.data);
        }).catch(error => {
            console.log(error.message)
        }).finally(() => {
            setLoading(false);
        })
    }, [])

    return (
        <form>
            <SearchContainer className="row">
                <div className="col">
                    <Sector type="text" placeholder="Secteur recherché" name="estateSector" id="estateSector"/>
                </div>
                <div className="col">
                    <Type name="estateType" id="estateType">
                        <option value="">Type de bien</option>
                        {!loading && estatesTypes.map(item => (<option value={item.id} key={item.id}>{item.estate_type_name}</option>))}
                    </Type>
                </div>
                <div className="col">
                    <Sector type="text" placeholder="Pièces"/>
                </div>
                <div className="col">
                    <Sector type="text" placeholder="Budget"/>
                </div>
                <div className="col">
                    <Sector type="text" placeholder="O"/>
                </div>
            </SearchContainer>
        </form>
    );
};

SearchBar.propTypes = {}

export default SearchBar;
