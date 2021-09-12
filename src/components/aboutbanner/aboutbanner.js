import React, {Component} from 'react';
import about from '../../assets/about.jpeg';

class AboutBanner extends Component {
    getImg = () => {
        return <img src={about} alt='aboutBannerImg' className='aboutBannerImg'></img>
    }

    render() {
        return (
            <section className='aboutBanner'>
                {this.getImg()}
                <div className='aboutBannerWrapper'></div>
            </section>
        )
    }
}

export default AboutBanner;

