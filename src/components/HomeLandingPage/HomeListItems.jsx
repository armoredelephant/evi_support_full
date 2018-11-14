import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ListIcon from './HomeListIcon';

class HomeListItem extends Component {
    render() {
        const { category, iconName, categoryDescription, categoryID } = this.props

        return (
            <Link to={`/${category}`} className="category-link">
                <li className="flex-item category-items" id={categoryID}>
                    <ListIcon iconName={iconName}/>
                    <h2>{category}</h2>
                    <hr />
                    <h3>{categoryDescription}</h3>
                </li>
            </Link> 
        );
    }
}

export default HomeListItem;
// refactor to where I can call on <HomeList category="Setup Videos" />