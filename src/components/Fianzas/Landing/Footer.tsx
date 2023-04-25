import { faFacebook, faInstagram,faTwitter, faTiktok, faGoogleWallet, faGoogle, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './css/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot} from '@fortawesome/free-solid-svg-icons'
import fiLogo from '../../../assets/fianzas/fianzas-logo.png';
import appStore from '../../../assets/general/appstore.png';
import playStore from  '../../../assets/general/playstore.png';

export const Footer = ()=>{
    return (
        <footer>
            <div className='services-content'>
                <div className='service-title'>
                    <h2>Servicio Eficiente</h2>
                    <p>Coberturas a tu medida en el menor tiempo, con facilidades de pago y grandes beneficios.</p>
                </div>
                <div className='service-action'>
                    <a className='btn-fianzas' href="#">Contáctanos</a>
                </div>
            </div>


            <div className='footer-upper-content'>
                <div className='footer-upper-content-container'>
                    <div>
                        <img src={fiLogo} className='logo'></img>
                        <p>Más de 37 años de experiencia en el ramo afianzador.</p>
                    </div>
                    <div>
                        <h4>Productos</h4>
                        <ul>
                            <li><a href="#">Arrendamiento</a></li>
                            <li><a href="#">Fidelidad</a></li>
                            <li><a href="#">Fiscales</a></li>
                            <li><a href="#">Judiciales</a></li>
                            <li><a href="#">Notario</a></li>
                            
                        </ul>
                    </div>
                    <div>
                        <h4>Legal</h4>
                        <ul>
                            <li><a href="#">Aviso de privacidad</a></li>
                            <li><a href="#">Términos</a></li>
                            <li><a href="#">Condiciones</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Contacto</h4>
                        <ul>
                            <li><a href="#"><p><FontAwesomeIcon icon={faPhone} size='1x'  className='fa-iconx'/> 01 800 902 3456</p></a></li>
                            <li><a href="#"><p><FontAwesomeIcon icon={faLocationDot} size='1x' className='fa-iconx'/> 9 oficinas en todo el país</p></a></li>
                            <li><a href="#"><p><FontAwesomeIcon icon={faEnvelope} size='1x' className='fa-iconx'/><span> atencion@impulsaasesores.mx</span></p></a></li>
                        </ul>
                    </div>
                    <div>
                        <p>Descarga nuestra aplicación móvil</p>
                        <ul>
                            <li><img src={appStore} className='store'></img></li>
                            <li><img src={playStore} className='store'></img></li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className='footer-lower-content'>
                <div className='footer-lower-content-foot'>
                    <p>© 2020 Impulsa Fianzas. Todos los derechos reservados</p>
                    <div className='footer-social'>
                        <FontAwesomeIcon icon={faFacebook} size='2x' />
                        <FontAwesomeIcon icon={faInstagram} size='2x' />
                        <FontAwesomeIcon icon={faTwitter} size='2x' />
                        <FontAwesomeIcon icon={faGoogle} size='2x' />
                        <FontAwesomeIcon icon={faWhatsapp} size='2x' />
                    </div>
                </div>
            </div>

        </footer>
    );
}