import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

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
    return (
        <div>
            <div className="container my-5">
                <div className="card text-center w-25">
                    <div className="card-header">
                        <div className={"d-flex justify-content-between"}>
                            299 000 €
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
                            <p className={"m-2"}>60240 Chaumont</p>
                            <p className={"m-2"}>
                                À vendre maison 10 pièces 230 m<sup>2</sup>
                            </p>
                        </div>
                    </CardFooter>
                </div>
            </div>
        </div>
    );
};

export default EstateCard;
