import React, {useContext} from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import DefaultPicture from '../../assets/img/user_default.png';
import {Context} from "../../utils/context/Context";
import ApiRoutes from "../../utils/const/ApiRoutes";
import PropTypes from "prop-types";

const Agency = () => {

    const [staffData, setStaffData] = useState({});
    const [loading, setLoading] = useState(true);
    const API_URL = useContext(Context).apiUrl;


    useEffect(() => {
        axios.get(API_URL + ApiRoutes.staff)
            .then(res => {
                setStaffData(res.data);
            }).catch(error => {
            console.log(error.message);
        }).finally(() => {
            setLoading(false);
        })
    }, [API_URL]);

    if (loading) {
        return <p>Chargement en cours..</p>
    }

    return (
        <div className="container ">
            <div className="row">
                <div className="my-3 text-center">
                    <h1>Notre agence</h1>
                </div>
                <div className="col-12  d-flex">
                    <div>
                        <img src="ms-icon-310x310.png" alt=""/>
                    </div>
                    <p className="col-8">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis aliquam minima magni
                        consequatur?
                        Quisquam minima harum numquam fugit libero ipsa nam cupiditate dolores at,
                        enim neque temporibus omnis voluptate explicabo! Lorem ipsum dolor sit amet consectetur
                        adipisicing elit.
                        Quis aspernatur explicabo magnam harum nisi distinctio ullam ut aliquid maxime nesciunt aperiam,
                        iure qui ratione, porro asperiores maiores assumenda suscipit animi? Lorem ipsum dolor sit, amet
                        consectetur adipisicing elit. Similique voluptas numquam quis non facere, debitis facilis
                        expedita aliquam nobis fugit iusto laudantium, aspernatur, natus esse. Officia laborum quibusdam
                        sed nam?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dicta, ut adipisci aliquam nemo
                        a ea tempora voluptas et! Repudiandae perspiciatis nemo ipsam minus rem tenetur debitis velit?
                        Voluptas, provident!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit at iusto facere dolore, atque
                        accusamus modi, fuga architecto neque quaerat fugit praesentium sapiente, dolorum voluptatum
                        asperiores? Repellendus voluptatem optio dolor! Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Corporis numquam odio quidem molestiae, eligendi veritatis ea, iusto dolor
                        suscipit, architecto repellendus. Quidem voluptas autem fuga nisi doloremque nam atque et! Lorem
                        ipsum dolor sit amet consectetur adipisicing elit. Accusamus odit harum, asperiores molestiae
                        illum amet deserunt saepe, atque, accusantium facere reiciendis facilis iure sapiente hic at
                        enim. Aliquam, quam minus.
                    </p>
                </div>
                <div className="my-3 text-center">
                    <h1>Notre équipe</h1>
                </div>

                {!loading && staffData.map(item => (

                    <div className="card m-auto col-2">
                        <img src={item.avatar} className="card-img-top img-fluid" alt="Photo staff"/>
                        <div className="card-body">
                            <h5 className="card-title" key={item.id}>{item.firstname} {item.lastname}</h5>
                            <p className="card-text text-dark"/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

Agency.propTypes = {
    avatar: PropTypes.string.isRequired,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
}

Agency.defaultProps = {
    picture: DefaultPicture,
    firstname: '',
    lastname: ''
}

export default Agency;