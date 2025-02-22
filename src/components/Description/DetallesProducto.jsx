
    import { Link, useParams } from 'react-router-dom';
    import { getDestinosID } from '../assets/dataBase';


        function DetallesProducto() {

            const {productoID} = useParams();
            const turismo  = getDestinosID.CostaRica?.find ((prod) => prod.id === Number(productoID));



                if (!turismo) {
                    return (
                        <div>
                            <h1>Producto no encontrado</h1>
                            <Link to="/Destinos">Volver</Link>
                        </div>
                    );
                }

            const {destino, precio, descripcion, imagen} = turismo;


            return (


                        <div>
                            <h1>{destino}</h1>
                            <img src={imagen} alt={destino} />
                            <p>{descripcion}</p>
                            <p>₡{precio}</p>
                            <Link to="/Destinos">Volver</Link>
                        </div>
                    

            )
        }

    export default DetallesProducto;