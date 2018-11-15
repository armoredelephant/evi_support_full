import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'

function SidebarCategory(props) {

    return (
        <ul>
            <button data-trigger={props.trigger} onClick={props.onClick}>{props.categoryName}</button>
            <div className={props.openCategories.includes(props.trigger) ? 'show' : 'hide'}>
                    {props.allArticleData[props.trigger].articles.map( (article, index) => (
                        <li key={index} >
                            <Link to={`/Articles/${props.trigger}/${article.id}`} className="article-link" key={index}>{article.title}</Link>
                        </li>
                    ))}
            </div>
        </ul>
    );
}

export default SidebarCategory