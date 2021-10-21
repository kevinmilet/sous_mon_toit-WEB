import React from 'react';
import MainHome from "../../components/MainHome/MainHome";
import EstatesRnd from "../../components/Estate/EstatesRnd";

const HomeView = (props) => {
    const {search} = props;
    return (
        <div>
            <MainHome search={search}/>
            <EstatesRnd/>
        </div>
    );
};

export default HomeView;
