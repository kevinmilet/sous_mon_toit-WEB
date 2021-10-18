import React from 'react';
import styled from 'styled-components';
import EstateMap from "../../components/Estate/EstateMap";
import EstateCard from "../../components/Estate/EstateCard";

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

const Estates = () => {
    return (
        <div>
            <BlockListing>
                <div className="listing">
                    <div className="left-side">
                        <EstateMap/>
                    </div>
                    <div className="left-side">
                        <EstateCard/>
                    </div>
                </div>
            </BlockListing>
        </div>
    );
};

export default Estates;
