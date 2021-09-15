import React from 'react';
import Home from "./screens/Home/Home";
import EstateCard from "./components/Estate/EstateCard";
import Agency from "./screens/Agency/Agency";
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
                <Route exact path="/our-agency">
                    <Agency/>
                </Route>
            </Router>
        </div>
    );
};

export default App;
