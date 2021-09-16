import React, {useState} from 'react';
import Home from "./screens/Home/Home";
import EstateCard from "./components/Estate/EstateCard";
import Agency from "./screens/Agency/Agency";
import {BrowserRouter as Router, Route} from "react-router-dom";
import UserAccount from './screens/UserAccount/UserAccount';
import DetailUser from './screens/UserAccount/DetailUser';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {ApiUrlsContext} from "./utils/context/ApiUrlsContext";
import ApiRoutes from "./utils/const/ApiRoutes";
import Connexion from './components/Connexion/Connexion';

const App = () => {
    const [apiUrl, setApiUrl] = useState(ApiRoutes.API_URL);
    return (
        <ApiUrlsContext.Provider value={{apiUrl, setApiUrl}}>
            <div>
                <Router>
                    <Header/>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route exact path="/liste-des-biens">
                        <EstateCard/>
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
                    <Route exact path="/connexion">
                        <Connexion/>
                    </Route>
                    <Footer/>
                </Router>
            </div>
        </ApiUrlsContext.Provider>
    );
};

export default App;
