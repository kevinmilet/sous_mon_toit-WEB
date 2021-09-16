import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

// fetch('http://api-sousmontoit.am.manusien-ecolelamanu.fr/public/staff').then((response) => {
//     console.log(response);
// })


const UserAccountMenu= () => {

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
        
        <div className="container hight">
            <div className="row">
                <div className="my-3 text-center">
                    <h1>Mon compte</h1>
                </div>

                {/* <div className="card" > */}
                    {/* <ul className="list-group list-group-flush">
                      <a href=""><li className="list-group-item p-3">An item</li></a>  
                       <a href=""><li className="list-group-item p-3">A second item</li></a> 
                       <a href=""><li className="list-group-item">A third item</li></a> 
                    </ul> */}
                    <div>
                        <a className="text-decoration-none text-dark" href="/my-account/detail">
                            <div className="border border-dark m-auto col-6 p-3">
                                <div className="text-center">Detail de mon compte</div> 
                            </div>
                        </a>
                        <a className="text-decoration-none text-dark" href="">
                            <div className="border border-dark m-auto mt-4 col-6 p-3">
                                <div className="text-center">Mes recherches enregistrées</div>
                            </div>
                        </a>
                        <a className="text-decoration-none text-dark" href="/liste-des-biens">
                            <div className="border border-dark m-auto mt-4 col-6 p-3">
                                <div className="text-center">Mes biens favoris</div>
                            </div>
                        </a>
                        <a className="text-decoration-none text-dark" href="">
                            <div className="border border-dark m-auto mt-4 col-6 p-3">
                                <div className="text-center">Card footer</div>
                            </div>
                        </a>
                        
                    </div>
                {/* </div> */}
            </div>
        </div> 
            
      
  
    );
};

export default UserAccountMenu