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
    // width: 1000px;
    // height: 55px;
    background-color: ${colors.secondaryBtn};
    border: none;
    border-radius: 50px;
    margin: 50px auto;
`
const Sector = styled.input`
     // width: 100%;
     height: 65px;
    background: transparent;
    border: none;
    // border-right: 2px solid ${colors.backgroundPrimary};
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
    // position: relative;
    // border-right: 2px solid ${colors.backgroundPrimary};
    // &:after {
    //     content: '>';
    //     font-family: "Consolas", monospace;
    //     font-size: inherit;
    //     font-weight: bold;
    //     color: ${colors.backgroundPrimary};
    //     -webkit-transform: rotate(90deg);
    //     -moz-transform: rotate(90deg);
    //     -ms-transform: rotate(90deg);
    //     transform: rotate(90deg);
    //     right: 20px;
    //     top: 18px;
    //     padding: 0 0 2px;
    //     position: absolute;
    //     pointer-events: none;
    // }
`
const Select = styled.select`
    // -webkit-appearance: none;
    // -moz-appearance: none;
    // appearance: none;
    // display: block;
    // float: right;
    // padding: 0px 24px;
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
    // width: 100%;
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
    padding-top: 0;
    width: 80px;
    height: 55px;
    border-radius: 50px;
    line-height: 2;
`

const SearchBar = (props) => {
    const API_URL = useContext(Context).apiUrl;
    const [loading, setLoading] = useState(true);
    const [estatesTypes, setEstatesTypes] = useState({});
    const [estatesData, setEstatesData] = useState({});
    const [cityList, setCityList] = useState('');
    const [cityQuery, setCityQuery] = useState('');

    const {search} = props;

    //false = 'Achat', true = 'Location'
    const [checked, setChecked] = useState(false);

    const formik = useFormik({
        initialValues: {
            city: '',
            id_estate_type: '',
            nb_rooms: '',
            price: undefined,
        },
        validationSchema : Yup.object({
            city: Yup.string()
                .trim()
                .matches(/^[a-zA-Z\-'.\s]+$/),
            id_estate_type: Yup.string()
                .trim()
                .matches(/^[0-9]+$/),
            nb_rooms: Yup.string()
                .trim()
                .matches(/^[1-5]{1,1}$/),
            price: Yup.number()
                .min(0),
            buy_or_rent: Yup.boolean().isRequired
        }),
        onSubmit: async (values) =>{
            values = {...values, buy_or_rent:checked ? 'Location' : 'Achat'}
            await new Promise(() => {
                // La fonction search() est dans App.jsx
                // pour passer les values dans le state
                search(values)
            })
        }
    })

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
        console.log(cityQuery);
        axios.get('https://geo.api.gouv.fr/communes?nom=' + cityQuery + '&fields=departement&limit=5')
            .then(response => {
                console.log(cityQuery);
                // setCityList(response.data);
            }).catch(error => {
            console.log(error.message)
        })
    },[cityQuery, formik.values.city])

    return (
        <form className="container-fluid" onSubmit={formik.handleSubmit}>
            <SearchContainer className="row col-10 justify-content-center">
                <div className=" col-md-3">
                    <Sector type="text" 
                            placeholder="Secteur recherché" 
                            name="city"
                            id="city"
                            value={formik.values.city}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            // onKeyUp={setCityQuery(this.values.bind(this))}
                    />
                </div>
                <SelectDiv className="  col-md-3">
                    <Select name="id_estate_type"
                            id="id_estate_type"
                            className="form-select text-center"
                            value={formik.values.id_estate_type}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                    >
                        <Option className="text-center" value="">Type de bien</Option>
                        {!loading && estatesTypes.map(item => (
                            <Option value={item.id} key={item.id}>{item.estate_type_name}</Option>))}
                    </Select>
                </SelectDiv>
                <SelectDiv className="col-12 col-md-3">
                    <Select name="nb_rooms" id="nb_rooms" className="form-select" value={formik.values.nb_rooms} onChange={formik.handleChange} onBlur={formik.handleBlur}>
                        <Option className="text-center" value="">Nombre de pièces</Option>
                        <Option value="1">1</Option>
                        <Option value="2">2</Option>
                        <Option value="3">3</Option>
                        <Option value="4">4</Option>
                        <Option value="5">5+</Option>
                    </Select>
                </SelectDiv>
                <div className="col-12 col-md-3">
                    <Budget type="text"
                            placeholder="Budget max."
                            name="price"
                            value={formik.values.price}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                    />
                </div>
            </SearchContainer>
            <div className="row">
                <div className="col d-flex justify-content-center">
                    <Switch
                        name="buy_or_rent"
                        isOn={checked}
                        handleChange={() => setChecked(!checked)}
                        value={formik.values.buy_or_rent}
                    />
                </div>
                <div className="col d-flex justify-content-center">
                    <SearchBtn type="submit" className="btn mt-3 mt-lg-0"><i className="fas fa-search"/></SearchBtn>
                </div>
            </div>
        </form>
    );
};

SearchBar.propTypes = {
    estates_types_name: PropTypes.string.isRequired,
    city: PropTypes.string,
    id_estate_type: PropTypes.string,
    nb_rooms: PropTypes.string,
    price: PropTypes.number,
    buy_or_rent: PropTypes.bool
}

SearchBar.defaultProps = {
    estates_types_name: '',
    city: '',
    id_estate_type: '',
    nb_rooms: '',
    price: undefined,
    buy_or_rent: false
}

export default SearchBar;
