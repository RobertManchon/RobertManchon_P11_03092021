import React, {Component} from 'react';
import './aboutbanner.css';
import about from '../../assets/about.jpeg';

class AboutBanner extends Component {
    render() {
        return (
            <section className='aboutBanner'>
                <img src={about} alt='aboutBannerImg' className='aboutBannerImg'></img>
                <div className='aboutBannerWrapper'></div>
            </section>
        )
    }
}

export default AboutBanner;
