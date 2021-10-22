import React from 'react';
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import L from 'leaflet';
import marker from "../../assets/icons/marker.png";
import PropTypes from "prop-types";
import EstateCard from "./EstateCard";
import styled from 'styled-components';

const myIcon = new L.icon({
    iconUrl: marker,
    iconRetinaUrl: marker,
    popupAnchor: [-0, -0],
    iconSize: [35, 35]
});

const Map = styled.div`
    -webkit-box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    -moz-box-shadow:    0px 3px 6px rgba(0, 0, 0, 0.16);
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    width: 90%;
`

function MapPlaceholder() {
    return (
        <p>
            Carte de france.{' '}
            <noscript>Vous devez activer les scripts pour voir cette carte.</noscript>
        </p>
    )
}

const EstateMap = ({estateData}) => {
    const position = [49.894067, 2.295753];
    const zoom = 8.5;
    const markerPos = [];

    return (
        <Map>
            <MapContainer
                center={position}
                zoom={zoom}
                scrollWheelZoom={false}
                style={{height: 500, width: 500}}
                placeholder={<MapPlaceholder/>}>

                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {estateData.map((item) => {

                        markerPos.push({title: item.title,
                                        surface: item.living_surface,
                                        price: item.price,
                                        position:[item.estate_latitude, item.estate_longitude]
                        })

                        return (
                            <div key={item.id}>
                                {markerPos.map((mark) => {
                                    return (
                                    <Marker icon={myIcon} position={mark.position}>
                                        <Popup>
                                            <p>{mark.title} {mark.surface} m<sup>2</sup></p>
                                            <p>{mark.price} €</p>
                                        </Popup>
                                    </Marker>
                                    )
                                })}

                            </div>
                        )
                    }
                )}
            </MapContainer>
        </Map>
    );
};

EstateCard.propTypes = {
    price: PropTypes.number.isRequired,
    zipcode: PropTypes.string.isRequired,
    living_surface: PropTypes.number.isRequired,
    estate_latitude: PropTypes.number.isRequired,
    estate_longitude: PropTypes.number.isRequired
}

EstateCard.defaultProps = {
    price: 0,
    zipcode: '',
    living_surface: 0,
    estate_latitude: 0,
    estate_longitude: 0
}

export default EstateMap;
