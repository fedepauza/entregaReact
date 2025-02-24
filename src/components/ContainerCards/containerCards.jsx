

import { useState, useEffect } from "react";
import Card from "../Cards/Card";
import {getDestinos} from '../assets/dataBase'
import './containerCards.css';

    function ContainerCards() {

    
        const [destinos, setDestinos] = useState([]);

    useEffect(() => {
        getDestinos().then((data) => {
            setDestinos(data);
        });
    }, []);


        return (

            <div className="containerCards">

                {destinos.map( (destino) => {

                    return (

                        <Card key={destino.id} destino={destino}/>

                    )

                })}
            
            </div>

        );
    }

export default ContainerCards;