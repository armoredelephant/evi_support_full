import React from 'react';

class HomeListItem extends React.Component {
    render() {
        return (
            <a className="list-group-item list-group-item-action">{this.props.category}</a>
        );
    }
}

export default HomeListItem;
// refactor to where I can call on <HomeList category="Setup Videos" />