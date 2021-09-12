import React, {Component} from 'react';

class Collapsible extends Component {
    state = {
        show : false,
        className: 'isClose',
    }

    showContent = () => {
        this.setState({
            show : !this.state.show
        })
        this.state.show 
        ? this.setState({ className: 'isClose' })
        : this.setState({ className: 'isOpen' })
    }

    getCollapsibleVisible = () => {
        return (
            <div className={`collapsibleVisible ${this.state.className}`} onClick={this.showContent}>
                <h3>{this.props.title}</h3>
                <i className="fas fa-chevron-down"></i>
            </div>
        )
    }

    getCollapsibleContent = () => {
        return (
            <div className={`collapsibleContent ${this.state.className}`}>
                <p>{this.props.content}</p>
            </div>
        )
    }

    render() {
        return (
            <article className="collapsibleArticle">
                {this.getCollapsibleVisible()}
                {this.getCollapsibleContent()}
            </article>
        )
    }
}

export default Collapsible;
