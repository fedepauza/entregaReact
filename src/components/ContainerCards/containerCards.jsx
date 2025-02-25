

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../Cards/Card";
import { getDestinosCat } from '../assets/dataBase'
import './containerCards.css';

    function ContainerCards() {

        const {category} = useParams ()
        const [destinos, setDestinos] = useState([]);

    useEffect(() => {
        getDestinosCat (category)
        .then((data) => {
            setDestinos(data);
        });
    }, [category]);
    
    

        return (

            <div className="containerCards">

                {destinos?.map( (destino) => (
                        <Card key={destino.id} {...destino}/>

                    ))
                }
            
            </div>

        );
    }

export default ContainerCards;