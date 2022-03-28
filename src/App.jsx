import React, {useEffect, useState} from 'react';
import HomeView from "./screens/Home/HomeView";
import Agency from "./screens/Agency/AgencyView";
import {BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import UserAccountView from './screens/UserAccount/UserAccountView';

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {Context} from "./utils/context/Context";
import ApiRoutes from "./utils/const/ApiRoutes";
import SignInView from './screens/SignIn/SignInView';
import ContactView from './screens/Contact/ContactView';
import SignUpView from './screens/SignUp/SignUpView';
import DetailEstateView from './screens/Estates/DetailEstateView';

import ForSaleView from './screens/ForSale/ForSaleView';
import EstatesListView from "./screens/Estates/EstatesListView";
import axios from "axios";
import FourOFourView from "./screens/404/404View";

const App = () => {
    const [apiUrl, setApiUrl] = useState(ApiRoutes.API_URL);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);

    const [estateList, setEstateList] = useState(null);

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (localStorage["token"]) {
            setToken(storedToken);
        }
        setLoading(false);
    }, []);

    if (loading) {
        return <></>;
    }

    const search = (values) => {
        axios.post(apiUrl + ApiRoutes.search, values)
            .then(res => {
                setEstateList(res.data);
            }).catch(error => {
            console.log(error.message);
        })
    }

    return (
        <Context.Provider value={{apiUrl, setApiUrl}}>
                <Router>
                    <Header/>
                    <Switch>
                        {estateList ? <Redirect to={{pathname: "/liste-des-biens"}}/> : null}
                        <Route exact path="/">
                            <HomeView search={search}/>
                        </Route>
                        <Route exact path="/liste-des-biens">
                            <EstatesListView search={search} estateSearch={estateList}/>
                        </Route>
                        <Route exact path="/detail-biens/:id">
                            <DetailEstateView/>
                        </Route>
                        <Route exact path="/our-agency">
                            <Agency/>
                        </Route>
                        <Route exact path="/for-sale">
                            <ForSaleView/>
                        </Route>
                        <Route exact path="/contact">
                            <ContactView/>
                        </Route>
                        {token === null ? (
                            <Switch>
                                <Route exact path="/connexion">
                                    <SignInView/>
                                </Route>
                                <Route exact path="/inscription">
                                    <SignUpView/>
                                </Route>
                                <Route exact path="/my-account">
                                    <SignInView/>
                                </Route>
                                <Route component={FourOFourView}/>
                            </Switch>
                        ) : (
                            <Switch>
                                <Route exact path="/my-account">
                                    <UserAccountView/>
                                </Route>
                                <Route exact path="/connexion">
                                    <Redirect to="/my-account"/>
                                </Route>
                                <Route exact path="/inscription">
                                    <Redirect to="/my-account"/>
                                </Route>
                                <Route component={FourOFourView}/>
                            </Switch>
                        )}
                    </Switch>
                </Router>
                <Footer/>
        </Context.Provider>
    );
};

export default App;
