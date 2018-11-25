import React from 'react';
import { Link } from 'react-router-dom';

import ListIcon from './HomeListIcon';

const HomeListItem = props => {
    return (
        <li className="flex-item category-items" id={props.categoryID}>
            <Link to={`/${props.category}`} className="category-link">
                <ListIcon iconName={props.iconName}/>
                <h2>{props.category}</h2>
                <hr />
                <h3>{props.categoryDescription}</h3>
            </Link> 
        </li>
    );
}

export default HomeListItem;