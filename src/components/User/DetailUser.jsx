import React from 'react';
import  { useState, useEffect } from 'react';
import axios from 'axios';
import styled from "styled-components";
import colors from '../../utils/styles/colors';


const NavAccount = styled.div`
.navbar{
margin:  auto;
  
.tab{
    background-color:  ${colors.secondaryBtn}
}
}

`
const Ul = styled.ul`
list-style:none;
`
// const NavAccount = styled.nav`

// .navbar{ background-color: ${colors.backgroundSecondary};}

// `

const DetailUser= () => {

    const [customerData, setCustomerData] = useState({})
    const [customerTypeData, setCustomerTypeData] = useState({})
    const [loading, setLoading] =  useState(true)

    axios.defaults.headers.common = {'Authorization': `Bearer ${localStorage["token"]}`}
        console.log(localStorage['id']);

    useEffect(()=>{
        if(localStorage["token"] != null  ){

            axios.get("http://api-sousmontoit.am.manusien-ecolelamanu.fr/public/customer/c/2")
            .then(res=>{
                console.log('coucou');
                setCustomerData(res.data);

            }).catch(error=>{
                
                // alert('coucou 2');
                console.log(error.message)

            }).finally(()=>{

                setLoading(false);

            })
            
            axios.get("http://api-sousmontoit.am.manusien-ecolelamanu.fr/public/describe_customer_type/joinCustomer/2")
            .then(res=>{
                console.log('coucou');
                setCustomerTypeData(res.data);

            }).catch(error=>{
                
                // alert('coucou 2');
                console.log(error.message)

            }).finally(()=>{

                setLoading(false);

            })
        } 
        
    
    
    },[])
 
    if(loading){

        return <p>Chargement en cours..</p>

    }
    return (
        
    
                           
            <div  className="container-fluid">
                  
                <nav className="navbar navbar-expand-lg ">
                    <div className="container ">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <NavAccount className="navbar-nav navbar m-auto">
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav navbar">
                                <a className="nav-link active" aria-current="page" href="#"><div className="border border-light p-3 tab rounded-pill text-white"><b>Mon informations</b></div></a>
                                <a className="nav-link active" aria-current="page" href="#"><div className="border border-light p-3 tab rounded-pill text-white"><b>Mes recherches</b></div></a>
                                <a className="nav-link active" aria-current="page" href="#"><div className="border border-light p-3 tab rounded-pill text-white"><b>Mes biens sauvegardés</b></div></a>
                                
                            </div>
                        </div>
                        </NavAccount>
                    </div>
                </nav>
              
                <div className="card w-25 m-auto">
                    <div className="card-body">
                        <h3 className="card-title text-center text-decoration-underline">Mes infos</h3>
                        <Ul>
                            <li><b>Prénom: </b> {customerData.firstname}</li>
                            <li><b>Nom:</b>  {customerData.lastname}</li>
                            <li><b>Mail:</b>  {customerData.mail}</li>
                            <li><b>Date de naissance:</b>  {customerData.birthdate}</li>
                            <li><b>Télèphone:</b>  {customerData.phone}</li>
                            <li><b>Adresse:</b>  {customerData.address}</li>
                        </Ul>
                        <a href="/update-user" className="btn btn-primary m-1">Modifier</a>
                        <a href="/delete-user" className="btn btn-danger m-1">Supprimer mon compte</a>
                    </div>
                </div>
               
          </div>
         
            
      
  
    );
};

export default DetailUser