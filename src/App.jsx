import React, {useState} from 'react';
import Home from "./screens/Home/Home";
import EstateCard from "./components/Estate/EstateCard";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {ApiUrlsContext} from "./utils/context/ApiUrlsContext";
import ApiRoutes from "./utils/const/ApiRoutes";

const App = () => {
    const [apiUrl, setApiUrl] = useState(ApiRoutes.API_URL);
    return (
        <ApiUrlsContext.Provider value={{apiUrl, setApiUrl}}>
            <div>
                <Router>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route exact path="/liste-des-biens">
                        <EstateCard/>
                    </Route>
                </Router>
            </div>
        </ApiUrlsContext.Provider>
    );
};

export default App;
