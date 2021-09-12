import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class ApartmentCard extends Component {
    getImg = () => {
        return <img src={this.props.cover} alt={this.props.title} className='galleryApartmentImg'/>
    }

    getTitle = () => {
        return <h2>{this.props.title}</h2>
    }

    render() {
        return (
            <article>
                <Link to={`/apartment/${this.props.id}`} key={this.props.id} className='galleryApartmentBox'>
                    {this.getImg()}
                    <div className="galleryOpacityDiv"></div>
                    {this.getTitle()}
                </Link>
            </article>
        )
    }
}

export default ApartmentCard;
