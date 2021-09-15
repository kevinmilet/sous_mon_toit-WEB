import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

// fetch('http://api-sousmontoit.am.manusien-ecolelamanu.fr/public/staff').then((response) => {
//     console.log(response);
// })


const StaffList = () => {

    const [staffData, setStaffData] = useState({})
    const [loading, setLoading] =  useState(true)

        
useEffect(()=>{
    axios.get("http://api-sousmontoit.am.manusien-ecolelamanu.fr/public/staff")
    .then(res=>{
        // console.log('coucou');
        setStaffData(res.data);

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
        
        <div className="container ">
            <div className="row">
                {!loading && staffData.map(item => (

                    <div className="card m-auto col-3" >
                        <img src={item.avatar} className="card-img-top img-fluid" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{item.firstname} {item.lastname}</h5>
                            <p className="card-text text-dark"></p>
                            
                        </div>
                    </div>
                ))}
            </div>
        </div> 
            
      
  
    );
};

export default StaffList;