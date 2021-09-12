import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import LogoFooter from '../../assets/logoFooter.png'

class Footer extends Component {
    getImg = () => {
        return <img src={LogoFooter} alt="Kasa Logo Footer" />
    }

    getText = () => {
        return <p>© 2021 Kasa. Tous droits réservés</p>
    }

    render() {
        return (
            <footer>
                <Link to="/">
                    {this.getImg()}
                </Link>
                    {this.getText()}
            </footer>
        )
    }
}

export default Footer;
