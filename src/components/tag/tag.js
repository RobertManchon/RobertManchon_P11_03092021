import React, {Component} from "react";

class Tag extends Component {
    render() {
        return <span className="apartmentTag">{this.props.tag}</span>
    }
}

export default Tag;
