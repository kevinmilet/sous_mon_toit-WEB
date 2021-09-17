import React, {useState} from 'react';
import HomeView from "./screens/Home/HomeView";
import EstateCard from "./components/Estate/EstateCard";
import Agency from "./screens/Agency/AgencyView";
import {BrowserRouter as Router, Route} from "react-router-dom";
import UserAccountView from './screens/UserAccount/UserAccountView';
import DetailUser from './screens/UserAccount/UserDetailsView';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {Context} from "./utils/context/Context";
import ApiRoutes from "./utils/const/ApiRoutes";
import SignInView from './screens/SignIn/SignInView';
import ContactView from './screens/Contact/ContactView';
import SignUpView from './screens/SignUp/SignUpView';

const App = () => {
    const [apiUrl, setApiUrl] = useState(ApiRoutes.API_URL);
    return (
        <Context.Provider value={{apiUrl, setApiUrl}}>
            <div>
                <Router>
                    <Header/>
                    <Route exact path="/">
                        <HomeView/>
                    </Route>
                    <Route exact path="/liste-des-biens">
                        <EstateCard/>
                    </Route>
                    <Route exact path="/our-agency">
                        <Agency/>
                    </Route>
                    <Route exact path="/my-account">
                        <UserAccountView/>
                    </Route>
                    <Route exact path="/my-account/detail">
                        <DetailUser/>
                    </Route>
                    <Route exact path="/connexion">
                        <SignInView/>
                    </Route>
                    <Route exact path="/contact">
                        <ContactView/>
                    </Route>
                    <Route exact path="/inscription">
                        <SignUpView/>
                    </Route>
                    <Footer/>
                </Router>
            </div>
        </Context.Provider>
    );
};

export default App;
