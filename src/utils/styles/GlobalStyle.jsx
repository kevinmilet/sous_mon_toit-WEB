import React from 'react';
import { createGlobalStyle } from 'styled-components'

const StyledGlobalStyle = createGlobalStyle`
    * {
        font-family: 'Spartan', Helvetica, sans-serif;
    }
    html, body {
        margin: 0;
        padding: 0;
    }
`

const GlobalStyle = () => {
    return (
        <StyledGlobalStyle/>
    );
};

export default GlobalStyle;
