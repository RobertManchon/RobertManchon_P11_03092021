import React, {Component} from 'react';
import './gallery.css';
import ApartmentCard from '../apartmentcard/apartmentcard';

class Gallery extends Component {
    render() {
        return (
            <div className='Gallery'>
                <ApartmentCard />
            </div>
        )
    }
}

export default Gallery;
