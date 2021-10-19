import React, {useContext, useEffect, useState} from 'react';
import styled from "styled-components";
import colors from "../../utils/styles/colors";
import axios from "axios";
import {Context} from "../../utils/context/Context";
import ApiRoutes from "../../utils/const/ApiRoutes";
import Switch from "../Tools/Switch/Switch";
import PropTypes from "prop-types";
import {useFormik} from "formik";
import * as Yup from "yup";

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
        box-shadow: none;
        border-color: none
    }
    &:focus-visible {
        outline: none;
    }
`
const Option = styled.option`
  color: ${colors.secondaryBtn};
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
    const [cityList, setCityList] = useState('');

    //false = 'Achat', true = 'Location'
    const [checked, setChecked] = useState(false);

    const formik = useFormik({
        initialValues: {
            city: '',
            estateType: '',
            nbRooms: '',
            budget: undefined,
        },
        validationSchema : Yup.object({
            city: Yup.string()
                .trim()
                .matches(/^[a-zA-Z\-'.\s]+$/),
            estatesTypes: Yup.string()
                .trim()
                .matches(/^[a-zA-Z]+$/),
            nbRooms: Yup.string()
                .trim()
                .matches(/^[1-5]{1,1}$/),
            budget: Yup.number()
                .min(0),
            buyOrRent: Yup.boolean().isRequired
        }),
        onSubmit: async (values) =>{
            values = {...values, buyOrRent:checked}
            await new Promise(() => {
                search(values)
            })
        }
    })

    const search = (values) => {
        console.log(values);
        alert(JSON.stringify(values, null, 2));
        // axios.get(API_URL + ApiRoutes.search, values)
        //     .then(res => {
        //         console.log(res)
        //     //    faire une redirection vers page de résultats
        //     }).catch(error => {
        //         console.log(error.message);
        // })
    }

    useEffect(() => {
        axios.get(API_URL + ApiRoutes.estates_types).then(response => {
            setEstatesTypes(response.data);
        }).catch(error => {
            console.log(error.message)
        }).finally(() => {
            setLoading(false);
        })
    }, [API_URL])

    useEffect((city) => {
        axios.get('https://geo.api.gouv.fr/communes?nom=' + city + '&fields=departement&limit=5')
            .then(response => {
                setCityList(response.data);
            }).catch(error => {
            console.log(error.message)
        })
    },[formik.values.city])

    return (
        <form onSubmit={formik.handleSubmit}>
            <SearchContainer className="row">
                <div className="col-12 col-md-3">
                    <Sector type="text" 
                            placeholder="Secteur recherché" 
                            name="city"
                            id="city"
                            value={formik.values.city}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}

                    />
                </div>
                <SelectDiv className="col-12 col-md-3">
                    <Select name="estateType" id="estateType" className="form-select" value={formik.values.estateType} onChange={formik.handleChange} onBlur={formik.handleBlur}>
                        <Option value="">Type de bien</Option>
                        {!loading && estatesTypes.map(item => (
                            <Option value={item.estates_type_name} key={item.id}>{item.estate_type_name}</Option>))}
                    </Select>
                </SelectDiv>
                <SelectDiv className="col-12 col-md-3">
                    <Select name="nbRooms" id="nbRooms" className="form-select" value={formik.values.nbRooms} onChange={formik.handleChange} onBlur={formik.handleBlur}>
                        <Option value="">Nombre de pièces</Option>
                        <Option value="1">1</Option>
                        <Option value="2">2</Option>
                        <Option value="3">3</Option>
                        <Option value="4">4</Option>
                        <Option value="5">5+</Option>
                    </Select>
                </SelectDiv>
                <div className="col-12 col-md-3">
                    <Budget type="text"
                            placeholder="Budget"
                            name="budget"
                            value={formik.values.budget}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                    />
                </div>
            </SearchContainer>
            <div className="row">
                <div className="col d-flex justify-content-center">
                    <Switch
                        name="buyOrRent"
                        isOn={checked}
                        handleChange={() => setChecked(!checked)}
                        value={formik.values.buyOrRent}
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
    estates_types_name: PropTypes.string.isRequired,
    city: PropTypes.string,
    estateType: PropTypes.string,
    nbRooms: PropTypes.string,
    budget: PropTypes.number,
    buyOrRent: PropTypes.bool
}

SearchBar.defaultProps = {
    estates_types_name: '',
    city: '',
    estateType: '',
    nbRooms: '',
    budget: undefined,
    buyOrRent: false
}

export default SearchBar;
