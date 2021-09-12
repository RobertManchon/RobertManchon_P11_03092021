import React, {Component} from 'react';
import home from '../../assets/home.jpeg';

class HeroBanner extends Component {
    getImg = () => {
        return <img src={home} alt='heroBannerImg' className='heroBannerImg'></img>
    }

    getTxt = () => {
        return <h2 className='heroBannerText'>Chez vous, partout et ailleurs</h2>
    }

    render() {
        return (
            <section className='heroBanner'>
                {this.getImg()}
                <div className='heroBannerWrapper'></div>
                {this.getTxt()}
            </section>
        )
    }
}

export default HeroBanner;
