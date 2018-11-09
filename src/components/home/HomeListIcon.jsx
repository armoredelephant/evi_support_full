import React, { Component } from 'react';

class ListIcon extends Component {
    render() {
        return (
            <i className={`fas ${this.props.iconName}`} id="font-icons"></i>
        );
    }
}

export default ListIcon