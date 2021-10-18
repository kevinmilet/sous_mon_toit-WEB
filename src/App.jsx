import React, {useEffect, useState} from 'react';
import HomeView from "./screens/Home/HomeView";
import Agency from "./screens/Agency/AgencyView";
import {BrowserRouter as Router, Redirect, Route} from "react-router-dom";
import UserAccountView from './screens/UserAccount/UserAccountView';
import DetailUser from './screens/UserAccount/UserDetailsView';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {Context} from "./utils/context/Context";
import ApiRoutes from "./utils/const/ApiRoutes";
import SignInView from './screens/SignIn/SignInView';
import ContactView from './screens/Contact/ContactView';
import SignUpView from './screens/SignUp/SignUpView';
import EstatesListView from "./screens/Estates/EstatesListView";
import Loader from "./components/Tools/Loader/Loader";

const App = () => {
    const [apiUrl, setApiUrl] = useState(ApiRoutes.API_URL);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (localStorage["token"]) {
            setToken(storedToken);
        }
        setLoading(false);
    }, []);

    return (
        loading ? <Loader/> :

        <Context.Provider value={{apiUrl, setApiUrl}}>
            <div>
                <Router>
                    <Header/>
                    <Route exact path="/">
                        <HomeView/>
                    </Route>
                    <Route exact path="/liste-des-biens">
                        <EstatesListView/>
                    </Route>
                    <Route exact path="/our-agency">
                        <Agency/>
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
                            <Route exact path="/my-account/detail">
                                <DetailUser/>
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
