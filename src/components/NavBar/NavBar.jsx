import CardWidget from "../CardWidget/CardWidget";
import "./NavBar.css";

function NavBar() {

    return (
        <nav className="navbar">
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Tours</a></li>
                <li><a href="#">Paquetes</a></li>
                <li><a href="#">Destinos</a></li>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
            <div>
                <input type="text" placeholder="Buscar..."/>
                <button>Buscar</button>
            </div>
            <div>
                <CardWidget/>
            </div>
        </nav>
    )
}

export default NavBar;