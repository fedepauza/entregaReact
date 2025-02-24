
    import { Link, useParams} from 'react-router-dom';
    import { useState, useEffect } from "react";
    import { getDestinosID} from '../assets/dataBase';
    import './DetallesProducto.css'


        function DetallesProducto() {


            const {productoID} = useParams()
            const [dest, setDest] = useState();

            console.log('ID recibido', productoID)

            useEffect(() => {
                getDestinosID(Number(productoID))
                    .then((data) => {
                        setDest(data)
                    })
                    .catch(err => console.error("Error al obtener el destino:", err))
            }, [productoID])

            if (!dest) {
                return <p className='cargando'>Cargando...</p>
            }

            return (

                    <div key={dest.id} dest={dest} className='detallesProducto'>
                        <h1 className='detallesTitle'>{dest.destino}</h1>
                        <img src={dest.imagen} alt={dest.destino} className='detallesImg'/>
                        <p className='detallesDescrip'>{dest.descripcion}</p>
                        <p className='detallesPrice'>₡{dest.precio}</p>
                        <Link to="/Destinos" className='detallesLink'>Volver</Link>
                    </div>

                )}

    export default DetallesProducto;