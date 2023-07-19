import { Link } from "react-router-dom";
import CartWitget from "../CartWitget/CartWitget";
import { FaTimes, FaBars } from 'react-icons/fa';
import { useState } from "react";



const NavBar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)

    return (
        <nav className="navList">
            <div className="navLogo">
                <Link to='/'>
                    <div>
                        <img src="/logo/eco-sound.png" alt="" />
                    </div>
                </Link>
                <div id='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#4FC0D0' }} />)
                        : (<FaBars size={30} style={{ color: '#4FC0D0' }} />)}
                </div>
                <ul className={click ? "menu_container active" : "menu_container"}>
                    <Link to="/" onClick={closeMenu}>Inicio</Link>
                    <Link to="/collection" onClick={closeMenu}> Coleccion</Link>
                    <Link to="/contact" onClick={closeMenu}>Contacto</Link>
                </ul>
            </div>
            <Link to='/cart'>
                <CartWitget />
            </Link>
        </nav>
    );
};

export default NavBar;

