import React from 'react';

class HomeList extends React.Component {
    render() {
        <a className="list-group-item list-group-item-action">
            {this.props.category}
        </a>
    }
}

export default HomeList;
// refactor to where I can call on <HomeList category="Setup Videos" />