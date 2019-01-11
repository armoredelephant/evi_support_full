import React from 'react';
import { Link } from 'react-router-dom'

function SidebarCategory(props) {
    return (
        <ul className="item-sidebar-list">
            <button data-trigger={props.trigger} 
                onClick={props.onClick} 
                className={props.openCategories.includes(props.trigger) ? 
                    "item-category-button-active" : 
                    "item-category-button"}>
                {props.categoryName}
            </button>
            <div className={props.openCategories.includes(props.trigger) ? 'show' : 'hide'}>
                {props.allData[props.trigger].categoryItems.map((item, index) => (
                    <li key={index} >
                        <Link to={`/${props.sitePage}/${props.trigger}/${item.id}`} 
                            className={props.activeItemLink === item.title 
                                ? 
                                    "sidebar-link-active" 
                                : 
                                    "sidebar-link"}  
                                key={index}>
                            {item.title}
                        </Link>
                    </li>
                ))}
            </div>
        </ul>
    );
}

export default SidebarCategory