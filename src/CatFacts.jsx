import React, { Component } from 'react';

class CatFacts extends Component {
    render() {
        let list = []
        this.props.facts.forEach(element => {
            list.push(<li>{element}</li>)
        });

        return (
            <ul>
                {list}
            </ul>
        );
    }
}

export default CatFacts;