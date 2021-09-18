import React, {Component} from 'react';
import './aboutpage.css';
import Collapsible from '../../components/collapsible/collapsible';
import AboutBanner from '../../components/aboutbanner/aboutbanner';
import {aboutData} from '../../datas/aboutdata';

class AboutPage extends Component {
    render() {
        return (
            <main className='about'>
                <AboutBanner />
                {aboutData.map((data) => (
                    <Collapsible key={data.id} title={data.title} content={data.content} />
                ))
                }
            </main>
        )
    }
}

export default AboutPage;
