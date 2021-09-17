import styled from 'styled-components';
import axios from "axios";
import React, {useState, useEffect} from 'react';
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import L from 'leaflet';
import marker from "../../assets/icons/marker.png";

const FavoriteButton = styled.div`
  .add-fav {
    cursor: pointer;
    transition: all .5s ease;
    
  .fa-heart {
    font-size: 24px;
    color: #454552;
    position: relative;
    transition: all .5s ease-in-out;
  }
  .fa-plus-circle {
    font-size: 9px;
    color: #454552;
    background: #ffffff;
    border-radius: 100%;
    position: absolute;
    bottom: 5px;
    right: 2px;
    line-height: 9px;
    text-align: center;
    -webkit-transition: all 1s ease-in-out;
    -webkit-transition: all 1s ease-in-out;
    -webkit-transition: all .5s ease-in-out;
    transition: all .5s ease-in-out;
  }
  input[type="checkbox"] { 
    position: absolute;
    opacity: 0;
    &:checked + .fa-heart {
      color: #E85A70;
      .fa-plus-circle {
        opacity: 0;
        transition: all .5s ease-in-out;
      }
    }
  }
}
`

const BlockListing = styled.div`
  .listing {
    zoom: 1;
    clear: both;
    padding: 0;
    position: relative;
    z-index: 1;
    
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
        
        .left-side {
            height: calc(100vh);
            float: left;
            width: 41.66666667%;
            
            img { 
                max-width: 135px;
                float: left;
                margin-right: 8px;
            }
        }
        
        .right-side {
            height: calc(100vh);
            border: 1px solid #E85A70;
            border-radius: 1px;
            overflow: auto;
            display: grid;
            grid-template-columns: repeat(2,auto);
            grid-gap: 20px;
        }
        
        .cardLink {
            text-decoration: none;
            color: black;
        }
  }
`

const CardFooter = styled.p`
  p {
    font-size: 13px;
    color: black;
    text-transform: uppercase;
  }
`

const SliderStyle = styled.div`
    .prev,
    .next {
        z-index: 2;
        border: none;
        background: transparent;
    }
    
    .prev:hover,
    .next:hover {
        cursor: pointer;
    }
    
    .slide {
        width: 100%;
        top: 0;
        left: 0;
        opacity: 0;
        transition: opacity 4s 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    
    .slide.active {
        opacity: 1;
    }

    .slide .slide__image {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }
    
    .card-body {
       padding: 5rem 1rem;
    } 
    
    .btn-slider {
        display: flex;
        justify-content: space-between;
        margin: 0px -11px 0px -11px;
    }
    
    i {
        color: black;
    }
`

const myIcon = new L.icon({
   iconUrl: marker,
   iconRetinaUrl: marker,
   popupAnchor: [-0, -0],
   iconSize: [35, 35]
});

{/* tableau des images */}
const Slides = [
    {
        image:
            "https://i.ibb.co/rf2TbH8/home-office-5006842-1280.png"
    },
    {
        image:
            "https://i.ibb.co/KmjpYV7/pexels-binyamin-mellish-186077.jpg"
    },
    {
        image:
            "https://i.ibb.co/4WN1sny/pexels-binyamin-mellish-106399.jpg"
    }
];

const Slide = ({classy, image}) => (
    <div className={classy}>
        <img src={image} alt={image} className="slide__image"/>
    </div>
);

const Slider = ({slides}) => {
    const [cur, setCur] = React.useState(0);
    const nextMoving = () => {
        if (cur >= slides.length - 1) {
            setCur(0);
        } else {
            setCur(cur + 1);
        }
    };
    const prevMoving = () => {
        if (cur <= 0) {
            setCur(slides.length - 1);
        } else {
            setCur(cur - 1);
        }
    };
    return (
        <section className="slider">
            {!slides || slides.length === 0 ? null : (
                <>
                    <div className={"btn-slider"}>
                        <button className="prev" onClick={prevMoving}>
                            <i className="fas fa-arrow-circle-left"/>
                        </button>
                        <button className="next" onClick={nextMoving}>
                            <i className="fas fa-arrow-circle-right"/>
                        </button>
                    </div>
                    {slides.map((slide, idx) => {
                        return (
                            <Slide
                                classy={idx === cur ? "slide active" : "slide"}
                                key={idx}
                                {...slide}
                            />
                        );
                    })}
                </>
            )}
        </section>
    );
};

const EstateCard = () => {
    const [EstateData, setEstateData] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get("http://api-sousmontoit.am.manusien-ecolelamanu.fr/public/estates").then(res => {
            setEstateData(res.data)
        }).catch(error => {
            console.log(error.message)
        }).finally(() => {
            setLoading(false)
        })
    }, [])

    if (loading) {
        return <p>Chargement en cours</p>
    }
    return (
        <div>
            <BlockListing>
                <div className="listing">
                    <div className="left-side">
                        <MapContainer
                            center={[46.603354, 1.888334]}
                            zoom={5.5}
                            scrollWheelZoom={false}
                        >
                            <TileLayer
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            {EstateData.map((item, i) => {
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
                    </div>
                    <div className="right-side">
                        {EstateData.map((item, i) => {
                                return (
                                    <div key={i}>
                                        <a className={"cardLink"} href="#">
                                            <div className="my-3 card text-center">
                                                <div className="card-header">
                                                    <div className={"d-flex justify-content-between"}>
                                                        {item.price} €
                                                        <FavoriteButton>
                                                            <label className="add-fav">
                                                                <input type="checkbox"/>
                                                                <i className="fas fa-heart">
                                                                    <i className="fas fa-plus-circle"/>
                                                                </i>
                                                            </label>
                                                        </FavoriteButton>
                                                    </div>
                                                </div>
                                                <SliderStyle>
                                                    <div className="card-body position-relative">
                                                        <Slider slides={Slides}/>
                                                    </div>
                                                </SliderStyle>
                                                <CardFooter>
                                                    <div className="card-footer">
                                                        <p className={"m-2"}>{item.zipcode} {item.city}</p>
                                                        <p className={"m-2"}>
                                                            À vendre maison 10 pièces {item.living_surface} m<sup>2</sup>
                                                        </p>
                                                    </div>
                                                </CardFooter>
                                            </div>
                                        </a>
                                    </div>
                                )
                            }
                        )}
                    </div>
                </div>
            </BlockListing>
        </div>
    );
};

export default EstateCard;
