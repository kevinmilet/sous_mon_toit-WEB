import React from 'react';
import Home from "./screens/Home/Home";
import EstateCard from "./components/Estate/EstateCard";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <div>
            <Router>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/liste-des-biens">
                    <Header/>
                    <EstateCard/>
                    <Footer/>
                </Route>
            </Router>
        </div>
    );
};

export default App;
