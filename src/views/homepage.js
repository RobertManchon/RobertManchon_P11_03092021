import React, {Component} from 'react';
import HeroBanner from '../components/herobanner/herobanner';
import Gallery from '../components/gallery/gallery';

class HomePage extends Component {
    render() {
        return (
            <main>
                <HeroBanner />
                <Gallery />
            </main>
        )
    }
}
export default HomePage;