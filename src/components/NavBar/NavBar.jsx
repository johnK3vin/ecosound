import { Link } from "react-router-dom";
import CartWitget from "../CartWitget/CartWitget";
import { FaTimes, FaBars } from 'react-icons/fa';
import { useState, useEffect } from "react";



const NavBar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)
    const [scroll, setScroll] = useState(false);

    // manejo del evento scroll
    const handleScroll = () => {
        setScroll(true);
    };

    useEffect(() => {
        // Agregamos un listener para el evento de scroll en el objeto window
        window.addEventListener('scroll', handleScroll);

        // Limpieza del listener cuando el componente se desmonta
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        // Deshabilitamos el menú al hacer scroll
        if (scroll && click) {
            setClick(false);
            setScroll(false);
        }
    }, [scroll, click]);

    return (
        <nav className="navList">
            <div className="navLogo">
                <Link to='/'>
                    <div>
                        <img src="/logo/eco-sound.png" alt="" />
                    </div>
                </Link>
                <div id='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '$color_3' }} />)
                        : (<FaBars size={30} style={{ color: '$color_3' }} />)}
                </div>
                <ul className={click && !scroll? "menu_container active" : "menu_container"}>
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

