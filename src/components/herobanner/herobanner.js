import React, {Component} from 'react';
import home from '../../assets/home.jpeg';


class HeroBanner extends Component {
    render() {
        return (
            <section className='heroBanner'>
                <img src={home} alt='heroBannerImg' className='heroBannerImg'></img>
                <div className='heroBannerWrapper'></div>
                <h2 className='heroBannerText'>Chez vous, partout et ailleurs</h2>
            </section>
        )
    }
}

export default HeroBanner;
