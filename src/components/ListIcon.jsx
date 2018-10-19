import React from 'react';

class ListIcon extends React.Component {
    render() {
        return (
            <i className={`fas ${this.props.iconName}`}></i>
        );
    }
}

export default ListIcon