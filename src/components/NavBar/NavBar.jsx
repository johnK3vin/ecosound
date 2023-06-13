import { Link } from "react-router-dom";
import CarWitget from "../CarWitget/CarWitget";


const NavBar = () => {
    return (
        <nav className="navList">
            <div>
                <Link to='/'>EcoSound</Link>
            </div>
            <ul>
                <Link to="/">Home</Link>
                <Link to="/collection">Collection</Link>
                <Link to="/contact">Contact</Link>
            </ul>
            <CarWitget/>
        </nav>
    );
};

export default NavBar;

