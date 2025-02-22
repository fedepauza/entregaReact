
    import Card from "../Cards/Card";
    import {getDestinos} from '../assets/dataBase'
    import { useParams } from "react-router-dom";
    import './containerCards.css';

        function ContainerCards() {

        
            const {productoID} = useParams();
            const destinos  = getDestinos()

            const dest = destinos?.CostaRica?.find((prod) => prod.id === Number(productoID))


            return (
                <div className="containerCards">
                    {destinos?.CostaRica?.map( (destino) => {
                        <Card key={destino.id} destino={destino}/>
                    })}
                
                </div>
            );
        }

    export default ContainerCards;