import React, {useContext, useEffect, useState} from 'react';
import styled from "styled-components";
import colors from "../../utils/styles/colors";
import axios from "axios";
import {Context} from "../../utils/context/Context";
import ApiRoutes from "../../utils/const/ApiRoutes";
import Switch from "../Switch/Switch";
import PropTypes from "prop-types";

const SearchContainer = styled.div`
    width: 1000px;
    height: 65px;
    background-color: ${colors.secondaryBtn};
    border: none;
    border-radius: 50px;
    margin: 50px auto;
`
const Sector = styled.input`
    width: 100%;
    height: 65px;
    background: transparent;
    border: none;
    border-right: 2px solid ${colors.backgroundPrimary};
    text-align: center;
    color: ${colors.backgroundPrimary};
    font-weight: bold;
    &::placeholder {
        text-align: center;
        color: ${colors.backgroundPrimary};
        font-weight: bold;
    }
    &:focus {
        outline: none;
        &::placeholder {
            color: transparent;
        }
    }
`
const SelectDiv = styled.div`
    position: relative;
    border-right: 2px solid ${colors.backgroundPrimary};
    &:after {
        content: '>';
        font-family: "Consolas", monospace;
        font-size: inherit;
        font-weight: bold;
        color: ${colors.backgroundPrimary};
        -webkit-transform: rotate(90deg);
        -moz-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        transform: rotate(90deg);
        right: 20px;
        top: 18px;
        padding: 0 0 2px;
        position: absolute;
        pointer-events: none;
    }
`
const Select = styled.select`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    display: block;
    float: right;
    padding: 0px 24px;
    line-height: 1.75;
    width: 100%;
    height: 65px;
    border: none;
    background: transparent;
    font-weight: bold;
    color: ${colors.backgroundPrimary};
    &:focus {
        outline: none;
    }
    &:focus-visible {
        outline: none;
    }
`
const Option = styled.option`
    margin: 15px 0;
    min-height: 100px;
    display:flex;
    align-items:center;
    top:15px;
    width: 100%;
    overflow:hidden;
    white-space:nowrap;
    color: ${colors.primary};
    &:hover {
        color: ${colors.backgroundPrimary};
        background-color: ${colors.secondaryBtn};
    }
`
const Budget = styled.input`
    width: 100%;
    height: 65px;
    text-align: center;
    background: transparent;
    border: none;
    text-align: center;
    font-weight: bold;
    color: ${colors.backgroundPrimary};
    &::placeholder {
        text-align: center;
        color: ${colors.backgroundPrimary};
        font-weight: bold;
    }
    &:focus {
        outline: none;
        &::placeholder {
            color: transparent;
        }
    }
`
const SearchBtn = styled.button`
    color: ${colors.backgroundPrimary};
    font-size: 30px;
    margin: 0 auto;
    background-color: ${colors.primaryBtn};
    padding-top: 5px;
    width: 80px;
    height: 65px;
    border-radius: 50px;
    line-height: 2;
`

const SearchBar = () => {
    const API_URL = useContext(Context).apiUrl;
    const [loading, setLoading] = useState(true);
    const [estatesTypes, setEstatesTypes] = useState({});

    //false = 'Acheter', true = 'Louer'
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        axios.get(API_URL + ApiRoutes.estates_types).then(response => {
            setEstatesTypes(response.data);
        }).catch(error => {
            console.log(error.message)
        }).finally(() => {
            setLoading(false);
        })
    }, [API_URL])

    return (
        <form>
            <SearchContainer className="row">
                <div className="col-12 col-md-3">
                    <Sector type="text" placeholder="Secteur recherché" name="estateSector" id="estateSector"/>
                </div>
                <SelectDiv className="col-12 col-md-3">
                    <Select name="estateType" id="estateType" className="form-select">
                        <Option value="">Type de bien</Option>
                        {!loading && estatesTypes.map(item => (
                            <Option value={item.id} key={item.id}>{item.estate_type_name}</Option>))}
                    </Select>
                </SelectDiv>
                <SelectDiv className="col-12 col-md-3">
                    <Select name="nbRooms" id="nbRooms" className="form-select">
                        <Option value="">Nombre de pièces</Option>
                        <Option value="1">1</Option>
                        <Option value="2">2</Option>
                        <Option value="3">3</Option>
                        <Option value="4">4</Option>
                        <Option value="5">5+</Option>
                    </Select>
                </SelectDiv>
                <div className="col-12 col-md-3">
                    <Budget type="text" placeholder="Budget"/>
                </div>
            </SearchContainer>
            <div className="row">
                <div className="col d-flex justify-content-center">
                    <Switch
                        isOn={checked}
                        handleChange={() => setChecked(!checked)}
                    />
                </div>
                <div className="col d-flex justify-content-center">
                    <SearchBtn type="submit" className="btn"><i className="fas fa-search"/></SearchBtn>
                </div>
            </div>
        </form>
    )
        ;
};

SearchBar.propTypes = {
    estates_types_name: PropTypes.string.isRequired
}

SearchBar.defaultProps = {
    estates_types_name: ''
}

export default SearchBar;
