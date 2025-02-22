
    import './Card.css';
    import { Link } from 'react-router-dom';

        const Card = ({destino}) => {

            return (

                <div className="cardContenedor">

                        <div key={destino.id} className="card">
                            <div className="imageContainer">
                            <img src={destino.imagen} alt={destino.destino}/>
                            </div>
                            <h2>{destino.destino}</h2>
                            <p className="precio">₡{destino.precio}</p>
                            <Link to={`/Destinos/${destino.id}`}>Ver mas</Link>
                        </div>

                </div>

                );

        }

    export default Card;

