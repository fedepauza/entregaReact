



    /********************************************************/ 
    /******************* Federico Pauza  ********************/ 
    /********************************************************/

    
import React, { useEffect, useState } from 'react';
import { getDestinosCat } from '../assets/dataBase';
import './ItemListContainer.css';
import { Link, useParams } from 'react-router-dom';


const ItemListContainer = ({ greeting }) => {
    
    const [cat, setCat] = useState ()
    const { category } = useParams()

    useEffect(() => {
        
        getDestinosCat(category)
        .then((data)=> {
            setCat(data)
        })

    }, [category])

    if (!cat) {
        return <p className='cargando'>Cargando...</p>;
    }


    return (
    
        <div className='divTitulo'>
            
            <h1>{greeting}</h1>
            <img className="imgLogo" src="https://cdn-icons-png.flaticon.com/512/3942/3942076.png" alt="" />


            <div key={cat.id} cat={cat} className='linkContainer'>

                <Link to={`/Destinos/${cat.caribe}`} className='linksFiltro'>Caribe de Costa Rica</Link>
                <Link to={`/Destinos/${cat.cerro}`} className='linksFiltro'>Cerros</Link>
                <Link to={`/Destinos/${cat.ciudad}`} className='linksFiltro'>Ciudades</Link>
                <Link to={`/Destinos/${cat.parque}`} className='linksFiltro'>Parques nacionales</Link>
                <Link to={`/Destinos/${cat.playa}`} className='linksFiltro'>Playas</Link>
                <Link to={`/Destinos/${cat.volcan}`} className='linksFiltro'>Volcanes</Link> 
                
            </div>

        </div>

    );
}

export default ItemListContainer;