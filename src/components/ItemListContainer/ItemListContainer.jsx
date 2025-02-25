



    /********************************************************/ 
    /******************* Federico Pauza  ********************/ 
    /********************************************************/


import React, { useEffect, useState } from 'react';
import { getDestinos, getDestinosCat } from '../assets/dataBase';
import './ItemListContainer.css';
import { Link, useParams } from 'react-router-dom';
import ContainerCards from '../ContainerCards/containerCards';


const ItemListContainer = ({ greeting }) => {
    
    const [dest, setDest] = useState ([])
    const { category } = useParams()

    useEffect(() => {
        
        const asynFun = category ? getDestinosCat : getDestinos
    
        asynFun(category)
        .then((data)=> {
            setDest(data)
        })
        .catch((err) => {
            console.error(err)
        })

    }, [category])

    if (!dest) {
        return <p className='cargando'>Cargando...</p>;
    }


    return (
    
            <div className='divTitulo'>
            
                <h1>{greeting}</h1>
                <img className="imgLogo" src="https://cdn-icons-png.flaticon.com/512/3942/3942076.png" alt="" />


                <div dest={dest} className='linkContainer'>

                    <Link to={`/Destinos/caribe`} className='linksFiltro'>Caribe de Costa Rica</Link>
                    <Link to={`/Destinos/cerro`} className='linksFiltro'>Cerros</Link>
                    <Link to={`/Destinos/ciudad`} className='linksFiltro'>Ciudades</Link>
                    <Link to={`/Destinos/parque`} className='linksFiltro'>Parques nacionales</Link>
                    <Link to={`/Destinos/playa`} className='linksFiltro'>Playas</Link>
                    <Link to={`/Destinos/volcan`} className='linksFiltro'>Volcanes</Link> 
                    
                    <ContainerCards dest={dest}/>
                    
                </div>


            </div>

    );
}

export default ItemListContainer;