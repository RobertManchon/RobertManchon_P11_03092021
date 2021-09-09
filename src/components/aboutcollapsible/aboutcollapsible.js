import React, {Component} from 'react';
import './aboutcollapsible.css';

class AboutCollapsible extends Component {
    state = {
        show : false,
    }

    showContent = () => {
        this.setState({
            show : !this.state.show
        })
    }

    render() {
        return (
            <article key={this.props.key} className="aboutCollapsibleArticle">
                <div className='aboutCollapsibleVisible' onClick={this.showContent}>
                    <h3>{this.props.title}</h3>
                    <i className="fas fa-chevron-down"></i>
                </div>
                {this.state.show 
                ? (<div className = "aboutCollapsibleContent">
                <p>{this.props.content}</p>
            </div>)
                : null}
            </article>
        )
    }
}

export default AboutCollapsible;
