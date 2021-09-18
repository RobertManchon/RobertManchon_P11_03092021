import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import LogoFooter from '../../assets/logoFooter.png'

class Footer extends Component {
    render() {
        return (
            <footer>
                <Link to="/">
                    <img src={LogoFooter} alt="Kasa Logo Footer" />
                </Link>
                <p>© 2021 Kasa. Tous droits réservés</p>
            </footer>
        )
    }
}

export default Footer;
