import React from 'react';
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import L from 'leaflet';
import marker from "../../assets/icons/marker.png";
import PropTypes from "prop-types";
import EstateCard from "./EstateCard";

const myIcon = new L.icon({
    iconUrl: marker,
    iconRetinaUrl: marker,
    popupAnchor: [-0, -0],
    iconSize: [35, 35]
});

const EstateMap = ({estateData}) => {

    return (
        <MapContainer
            center={[46.603354, 1.888334]}
            zoom={5.5}
            scrollWheelZoom={false}
        >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {estateData.map((item, i) => {
                    return (
                        <div key={i}>
                            <Marker
                                icon={myIcon}
                                position={[item.estate_latitude, item.estate_longitude]}
                            >
                                <Popup>
                                    <img src="https://i.ibb.co/rf2TbH8/home-office-5006842-1280.png" alt=""/>
                                    <p>Maison (type estate) 4 pièces (nb pieces) {item.living_surface} m<sup>2</sup></p>
                                    <p>{item.price} €</p>
                                </Popup>
                            </Marker>
                        </div>
                    )
                }
            )}
        </MapContainer>
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

export default EstateMap;
