import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
    return ( 
        <footer>
            <ul>
                <li>
                    <FaFacebook/>
                </li>
                <li>
                    <FaInstagram/>
                </li>
                <li>
                    <FaLinkedin/>
                </li>
            </ul>
        </footer>
     );
}
 
export default Footer;