import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import './header.css';

class Header extends Component {
    render() {
        return (
            <header>
                <Link to='/'>
                    <img src={Logo} alt='logoHeader' className="logoHeader"></img>
                </Link>
                <nav className="navBarHeader">
                    <Link to="/" className="linkHomePageHeader">Accueil</Link>
                    <Link to="/About" className="linkAboutPageHeader">A propos</Link>
                </nav>
            </header>
        )
    }
}

export default Header;
