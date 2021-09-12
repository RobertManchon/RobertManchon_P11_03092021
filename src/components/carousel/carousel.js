import React, {Component} from "react";
import noPictures from '../../assets/noPictures.png';

class Carousel extends Component {
    render() {
        return (
            <article className="carousel">
                <div className="carouselPicturesBox">
                    <img src={noPictures} alt='logoHeader' className="carouselPictures"></img>
                <nav className="carouselNav">
                    <i className="fas fa-chevron-left"></i>
                    <i className="fas fa-chevron-right"></i>
                </nav>
                <p className="carouselCounter">1/5</p>
                </div>
            </article>
        )
    }
}

export default Carousel;
