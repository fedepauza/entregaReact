
import React, { useEffect, useState } from 'react';
import { getDestinos, getDestinosCat } from '../assets/dataBase';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import DetallesProducto from '../Description/DetallesProducto';

const ItemListContainer = ({ greeting }) => {
    
    const [dest, setDest] = useState ([])
    const { category } = useParams()

    useEffect(() => {
        const asynFun = category ? getDestinosCat : getDestinos;

        asynFun (category)
            .then ((resp) => {
                setDest (resp)
            })
            .catch ((err) => {
                console.error(err)
            })
    }, [category])

    return (
    
        <div className='divTitulo'>
            <h1>{greeting}</h1>
            <img className="imgLogo" src="https://cdn-icons-png.flaticon.com/512/3942/3942076.png" alt="" />

            <div>

                <Link to={'Caribe'}>Caribe de Costa Rica</Link>
                <Link to={'Cerro'}>Cerros</Link>
                <Link to={'Ciudad'}>Ciudades</Link>
                <Link to={'Parque'}>Parques nacionales</Link>
                <Link to={'Playa'}>Playas</Link>
                <Link to={'Volcan'}>Volcanes</Link>       
                
            </div>

            <DetallesProducto dest = {dest}/>
            
        </div>

    );
}

export default ItemListContainer;