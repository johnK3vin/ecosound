import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';

import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className='footerContainer'>
            <div className='containerFooter'>
                <div className="logoFooter">
                    <Link to="/">
                        <img src="./logo/eco-sound.png" alt="logo de ecosound"/>
                    </Link>
                </div>
                <div className='linkContainer'>
                    <h3>Links</h3>
                    <ul className="links">
                        <Link to="/">Inicio</Link>
                        <Link to="/collection">Coleccion</Link>
                        <Link to="/contact">Contacto</Link>
                    </ul>
                </div>
                <div className='redContainer'>
                    <h3>Redes sociales</h3>
                    <div className="redSocial">
                        <a href="https://facebook.com"><FacebookIcon style={{fontSize: "2rem"}}/></a>
                        <a href="https://instagram.com"><InstagramIcon style={{fontSize: "2rem"}}/></a>
                        <a href="https://twitter.com"><TwitterIcon style={{fontSize: "2rem"}}/></a>
                    </div>
                </div>
            </div>
            <div className='contactFooter'>
                <div>
                    <CallIcon/>
                    <span>+56961638224</span>
                </div>
                <div>
                    <EmailIcon/>
                    <span>soporteEcosound@gmail.com</span>
                </div>
                <div>
                    <PlaceIcon/>
                    <span>1990, villa verde avenida las camelias</span>
                </div>
            </div>
            <div style={{display: "flex", justifyContent: "center", fontSize: "2rem", marginTop: "1rem"}}>
                <h6 style={{textShadowL: "0 1px 1px black"}}>©Todos los derechos reservados 2023</h6>
            </div>
        </div>
    );
}

export default Footer;