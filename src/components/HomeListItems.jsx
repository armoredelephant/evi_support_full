import React from 'react';
import { Link } from 'react-router-dom';

import ListIcon from './HomeListIcon';

class HomeListItem extends React.Component {
    render() {
        return (
            <Link to="/Articles" className="category-link">
                <li className="flex-item category-items" id={this.props.categoryID}>
                    <ListIcon iconName={this.props.iconName}/>
                    <h2>{this.props.category}</h2>
                    <hr />
                    <h3>{this.props.categoryDescription}</h3>
                </li>
            </Link> 
        );
    }
}

export default HomeListItem;
// refactor to where I can call on <HomeList category="Setup Videos" />