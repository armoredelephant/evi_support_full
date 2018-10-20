import React from 'react';
import { Link } from 'react-router-dom';

import ListIcon from './ListIcon';

class HomeListItem extends React.Component {
    render() {
        return (
            <Link to="/fake" className="list-group-item list-group-item-action">
                <ListIcon iconName={this.props.iconName}/>
                {this.props.category}
            </Link> 
        );
    }
}

export default HomeListItem;