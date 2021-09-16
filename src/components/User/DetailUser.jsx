import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

// fetch('http://api-sousmontoit.am.manusien-ecolelamanu.fr/public/staff').then((response) => {
//     console.log(response);
// })


const DetailUser= () => {

    const [customerData, setCustomerData] = useState({})
    const [loading, setLoading] =  useState(true)

        
useEffect(()=>{
    axios.get("http://api-sousmontoit.am.manusien-ecolelamanu.fr/public/customers")
    .then(res=>{
        // console.log('coucou');
        setCustomerData(res.data);

    }).catch(error=>{
        
        console.log('coucou 2');
        console.log(error.message)

    }).finally(()=>{

        setLoading(false);

    })
},[])

    if(loading){

        return <p>Chargement en cours..</p>

    }
    return (
        
        <div className="container hight">
            <div className="row">
              <ul>
                  <li>Prénom: {customerData[0].mail}</li>
                  <li>Nom:</li>
              </ul>
            </div>
        </div> 
            
      
  
    );
};

export default DetailUser