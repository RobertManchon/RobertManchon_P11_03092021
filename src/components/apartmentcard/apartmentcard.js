import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './apartmentcard.css';
import {data} from '../../datas/data';

class ApartmentCard extends Component {
    render() {
        return (
            <section className="galleryApartmentCard">
                {data.map(apartment => {
                    return (
                        <article>
                        <Link to={`/apartment/${apartment.id}`} key={apartment.id} className='galleryApartmentBox'>
                            <img src={apartment.cover} alt={apartment.title} className='galleryApartmentImg'/>
                            <div className="galleryOpacityDiv"></div>
                            <h2>{apartment.title}</h2>
                        </Link>
                        </article>
                    )
                })}
            </section>
        )
    }
}

export default ApartmentCard;
