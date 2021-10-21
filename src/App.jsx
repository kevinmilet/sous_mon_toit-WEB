import React, {useEffect, useState} from 'react';
import HomeView from "./screens/Home/HomeView";
import Agency from "./screens/Agency/AgencyView";
import {BrowserRouter as Router, Redirect, Route} from "react-router-dom";
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
        axios.post('http://localhost:8000/estates/search', values)
            // axios.post(API_URL + ApiRoutes.search +'/', values)
            .then(res => {
                setEstateList(res.data);
            }).catch(error => {
            console.log(error.message);
        })
    }

    return (
        <Context.Provider value={{apiUrl, setApiUrl}}>
            <div>
                <Router>
                    {estateList ? <Redirect to={{ pathname: "/liste-des-biens"}}/> : null }
                    <Header/>
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
                        <React.Fragment>
                            <Route exact path="/connexion">
                                <SignInView/>
                            </Route>
                            <Route exact path="/inscription">
                                <SignUpView/>
                            </Route>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <Route exact path="/my-account">
                                <UserAccountView/>
                            </Route>
                            
                            <Route exact path="/connexion">
                                <Redirect to="/my-account"/>
                            </Route>
                            <Route exact path="/inscription">
                                <Redirect to="/my-account"/>
                            </Route>
                        </React.Fragment>
                    )}
                    <Footer/>
                </Router>
            </div>
        </Context.Provider>
    );
};

export default App;
