import React, { Component } from 'react';
import CatFacts from './CatFacts'

class KittenBio extends Component {
    render() {
        return (
            <div>
                <h1>Cat Name: {this.props.name}</h1>
                <img src="http://www.placekitten.com/200/200" />
                <p>
                   <CatFacts facts={this.props.catInfo} /> 
                </p>
            </div>
        );
    }
}

export default KittenBio;