import React from 'react';
import Home from "./screens/Home/Home";
import ContactView from "./screens/Contact";
import ConnexionView from "./screens/Connexion";
import InscriptionView from "./screens/Inscription";
import EstateCard from "./components/Estate/EstateCard";
import {BrowserRouter as Router, Route} from "react-router-dom";

const App = () => {
    return (
        <div>
            <Router>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/liste-des-biens">
                    <EstateCard/>
                </Route>
                <Route exact path="/contact">
                    <ContactView/>
                </Route>
                <Route exact path="/inscription">
                    <InscriptionView/>
                </Route>
                <Route exact path="/connexion">
                    <ConnexionView/>
                </Route>
            </Router>
        </div>
    );
};

export default App;
