

    import CardWidget from "../CardWidget/CardWidget";
    import "./NavBar.css";
    import { Link } from "react-router-dom";

        function NavBar() {

            return (
                <nav className="navbar">
                    <ul>
                        <Link to={'/'}>Inicio</Link>
                        <Link to={'/Error'}>Tours</Link>
                        <Link to={'/Error'}>Paquetes</Link>
                        <Link to={'destinos'}>Destinos</Link>
                        <Link to={'/Error'}>Nosotros</Link>
                        <Link to={'/Error'}>Contacto</Link>
                    </ul>
                    <div>
                        <input type="text" placeholder="Buscar..." className="inputText"/>
                        <button className="button">Buscar</button>
                    </div>
                    <div>
                        <CardWidget/>
                    </div>
                </nav>
            )
        }

    export default NavBar;