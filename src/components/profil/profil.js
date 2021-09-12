import React, {Component} from "react";
import about from '../../assets/about.jpeg';

class Profil extends Component {
    render() {
        return (
            <div className="apartmentProfil">
                <p className="apartmentNameHost">Nathalie Jean</p>
                <img className="apartmentImgHost" alt="" src={about} />
            </div>
        )
    }
}

export default Profil;
