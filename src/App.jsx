import React from 'react';
import Home from "./screens/Home/Home";
import ContactView from "./screens/Contact";
import ConnexionView from "./screens/Connexion";
import InscriptionView from "./screens/Inscription";
import EstateCard from "./components/Estate/EstateCard";
import Agency from "./screens/Agency/Agency";
import {BrowserRouter as Router, Route} from "react-router-dom";
import UserAccount from './screens/UserAccount/UserAccount';
import DetailUser from './screens/UserAccount/DetailUser';

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
                <Route exact path="/contact">
                    <ContactView/>
                </Route>
                <Route exact path="/inscription">
                    <InscriptionView/>
                </Route>
                <Route exact path="/connexion">
                    <ConnexionView/>
                </Route>
                <Route exact path="/our-agency">
                    <Agency/>
                </Route>
                <Route exact path="/my-account">
                    <UserAccount/>
                </Route>
                <Route exact path="/my-account/detail">
                    <DetailUser/>
                </Route>
            </Router>
        </div>
    );
};

export default App;
