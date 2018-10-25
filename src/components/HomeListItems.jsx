import React from 'react';
import { Link } from 'react-router-dom';

import ListIcon from './ListIcon';

class HomeListItem extends React.Component {
    render() {
        return (
            <Link to="#" className="home-list-items">
                <ListIcon iconName={this.props.iconName}/>
                <p>{this.props.category}</p>
            </Link> 
        );
    }
}

export default HomeListItem;
// refactor to where I can call on <HomeList category="Setup Videos" />