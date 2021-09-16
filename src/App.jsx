import React, {useEffect, useState} from 'react';
import Home from "./screens/Home/Home";
import EstateCard from "./components/Estate/EstateCard";
import Agency from "./screens/Agency/Agency";
import {BrowserRouter as Router, Redirect, Route} from "react-router-dom";
import UserAccount from './screens/UserAccount/UserAccount';
import DetailUser from './screens/UserAccount/DetailUser';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {ApiUrlsContext} from "./utils/context/ApiUrlsContext";
import ApiRoutes from "./utils/const/ApiRoutes";
import ConnexionView from './screens/Connexion';
import ContactView from './screens/Contact';
import InscriptionView from './screens/Inscription';

const App = () => {
    const [isAuth, setIsAuth] = useState(false);
    const [apiUrl, setApiUrl] = useState(ApiRoutes.API_URL);
    const [token, setToken] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
        }
        setLoading(false);

        console.log('storedToken: ' + storedToken)
    }, [isAuth, token]);

    if (loading) {
        return <></>;
    }

    return (
        <ApiUrlsContext.Provider value={{apiUrl, setApiUrl, setIsAuth}}>
            <div>
                <Router>
                    <Header/>
                    {token === null ? (
                            <React.Fragment>
                                <Route exact path="/">
                                    <Home/>
                                </Route>
                                <Route exact path="/connexion">
                                    <ConnexionView/>
                                </Route>
                                <Route exact path="/liste-des-biens">
                                    <EstateCard/>
                                </Route>
                                <Route exact path="/our-agency">
                                    <Agency/>
                                </Route>
                                <Route exact path="/contact">
                                    <ContactView/>
                                </Route>
                            </React.Fragment>
                        ) :
                        (
                            <React.Fragment>
                                <Route exact path="/">
                                    <Home/>
                                </Route>
                                <Route exact path="/liste-des-biens">
                                    <EstateCard/>
                                </Route>
                                <Route exact path="/our-agency">
                                    <Agency/>
                                </Route>
                                <Route exact path="/contact">
                                    <ContactView/>
                                </Route>
                                <Route exact path="/my-account">
                                    <UserAccount/>
                                </Route>
                                <Route exact path="/my-account/detail">
                                    <DetailUser/>
                                </Route>
                                <Route exact path="/inscription">
                                    <InscriptionView/>
                                </Route>
                                <Route path="/connexion">
                                    <Redirect from="/connexion" to="/my-account"/>
                                </Route>
                            </React.Fragment>
                        )
                    }
                    <Footer/>
                </Router>
            </div>
        </ApiUrlsContext.Provider>
    );
};

export default App;
