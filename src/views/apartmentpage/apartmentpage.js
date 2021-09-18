import React, {Component} from 'react';
import './apartmentpage.css';
import Carousel from '../../components/carousel/carousel';
import Title from '../../components/title/title';
import Tag from '../../components/tag/tag';
import Location from '../../components/location/location';
import Profil from '../../components/profil/profil';
import Rating from '../../components/rating/rating';
import Collapsible from '../../components/collapsible/collapsible';
import { Redirect } from "react-router-dom";


class ApartmentPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            apartment: this.getApartment(),
        }
    }

    getApartment = () => {
        const apartment = this.props.apartments.filter(
            (apt) => apt.id === this.props.match.params.id
        )

        return apartment[0]
    }

    getTags = () => {
        return (
            <div className="apartmentTagsBox">
                {this.state.apartment.tags.map((tag, index) => (
                    <Tag tag={tag} key={index} />
                ))}
            </div>
        )
    }

    getCollapsibles = () => {
        return (
            <section className="apartmentCollapsible">
                <Collapsible title='Description' content={this.state.apartment.description}/>
                <Collapsible title='Équipements' content={this.state.apartment.equipments}/>
            </section>
        )
    }

    render() {
        if (!this.props.apartments.some((apt) => apt.id === this.props.match.params.id)) return <Redirect to="/404" />

        return (
            <main>
                <Carousel pictures={this.state.apartment.pictures}/>
                <section className="apartmentInformations">
                    <div className="apartmentBox">
                        <Title title={this.state.apartment.title}/>
                        <Location location={this.state.apartment.location}/>
                        {this.getTags()}
                    </div>
                    <div className="apartmentBoxAside">
                        <Profil host={this.state.apartment.host}/>
                        <Rating rating={this.state.apartment.rating}/>
                    </div>
                </section>
                {this.getCollapsibles()}
            </main>
        )
    }
}

export default ApartmentPage;
