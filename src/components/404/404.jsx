import React from 'react';
import './404.scss';
import {StyledBtnPrimary} from "../../utils/styles/Atoms";
import {useHistory} from "react-router-dom";

const FourOFour = () => {

    const history = useHistory()

    const goHome = () => {
        history.push('/');
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="error-template">
                            <h1>
                                Oups!</h1>
                            <h2>
                                Page non trouvée</h2>
                            <div className="error-details">
                                Désolé, une erreur est survenue, La page demandée n'existe pas!
                            </div>
                            <div className="error-actions">
                                <StyledBtnPrimary onClick={goHome}>
                                    Accueil
                                </StyledBtnPrimary>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FourOFour;
