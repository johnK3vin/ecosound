import { Link } from "react-router-dom";
import CarWitget from "../CarWitget/CarWitget";


const NavBar = () => {
    return (
        <nav className="navList">
            <div className="navLogo">
                <Link to='/'>
                    <img src="./logo/eco-sound.png" alt="" />
                </Link>
            </div>
            <ul>
                <Link to="/">Inicio</Link>
                <Link to="/collection">Coleccion</Link>
                <Link to="/contact">Contacto</Link>
            </ul>
            <CarWitget/>
        </nav>
    );
};

export default NavBar;

