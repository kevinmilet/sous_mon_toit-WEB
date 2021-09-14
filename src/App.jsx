import React from 'react';
import styled from "styled-components";
import Home from "./screens/Home/Home";

const Container = styled.div`
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
`

const App = () => {
  return (
      <Container className="container-fluid">
        <Home/>
      </Container>
  );
};

export default App;
