

import { useState, useEffect } from "react";
import Card from "../Cards/Card";
import { getDestinos } from '../assets/dataBase'
import './containerCards.css';

    function ContainerCards() {

        const [cat, setCat] = useState ([])
        const [destinos, setDestinos] = useState("");

    useEffect(() => {
        getDestinos()
            .then((data) => {
                setDestinos(data);
            })
            .catch(err => console.error("Error al obtener destinos:", err));
    }, []);

    const filtrarCategoria = (categoria) => {
        setCat(categoria);
    }

    const destinosFiltrados = Array.isArray(destinos) 
    ? (cat ? destinos.filter(destino => destino.categoria === cat) : destinos)
    : [];
    
    

        return (

            <div className="contenedorP">

                <div className='linkContainer'>

                    <button className='linksFiltro' onClick={() => filtrarCategoria("caribe")}>Caribe de Costa Rica</button>
                    <button className='linksFiltro' onClick={() => filtrarCategoria("cerro")}>Cerros</button>
                    <button className='linksFiltro' onClick={() => filtrarCategoria("ciudad")}>Ciudades</button>
                    <button className='linksFiltro' onClick={() => filtrarCategoria("parque")}>Parques nacionales</button>
                    <button className='linksFiltro' onClick={() => filtrarCategoria("playa")}>Playas</button>
                    <button className='linksFiltro' onClick={() => filtrarCategoria("volcan")}>Volcanes</button>
                    <button className='linksFiltro' onClick={() => filtrarCategoria("")}>Mostrar Todos</button>

                </div>
                <div className="containerCards">

                {destinosFiltrados.map( (destino) => (
                        <Card key={destino.id} destino={destino}/>

                    ))

                }

                </div>

            
            </div>

        );
    }

export default ContainerCards;