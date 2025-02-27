



    /********************************************************/ 
    /******************* Federico Pauza  ********************/ 
    /********************************************************/


import React, { useEffect, useState } from 'react';
import { getDestinos, getDestinosCat } from '../assets/dataBase';
import './ItemListContainer.css';
import { Link, useParams } from 'react-router-dom';



const ItemListContainer = ({ greeting }) => {
    
    const [dest, setDest] = useState ([])
    const { category } = useParams()

    
    useEffect(() => {
        console.log("categoria recibida: " , category)
        
        const asynFun = category ? getDestinosCat : getDestinos
        
        asynFun(category)
        .then((data)=> {
            setDest(data)
        })
        .catch((err) => {
            console.error(err)
        })
        
    }, [category])
    
    
    // if (!dest) {
        //     return <p className='cargando'>Cargando...</p>;
        // }
        
        
        
        return (
            
            <div className='divTitulo'>
            
                <h1>{greeting}</h1>
                <img className="imgLogo" src="https://cdn-icons-png.flaticon.com/512/3942/3942076.png" alt="" />


                

                  

            </div>

);
}

export default ItemListContainer;