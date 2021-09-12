import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import './header.css';

class Header extends Component {
    getLogo = () => {
        return (
            <Link to='/'>
                <img src={Logo} alt='logoHeader' className="logoHeader"></img>
            </Link>
        )
    }

    getLinkHomePage = () => {
        return <Link to="/" className="linkHomePageHeader">Accueil</Link>
    }

    getLinkAboutPage = () => {
        return <Link to="/About" className="linkAboutPageHeader">A propos</Link> 
    }

    render() {
        return (
            <header>
                {this.getLogo()}
                <nav className="navBarHeader">
                    {this.getLinkHomePage()}
                    {this.getLinkAboutPage()}
                </nav>
            </header>
        )
    }
}

export default Header;
