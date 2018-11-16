import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'

function SidebarCategory(props) {

    return (
        <ul className="article-sidebar-list">
            <button data-trigger={props.trigger} onClick={props.onClick} className={props.openCategories.includes(props.trigger) ? "article-category-button-active" : "article-category-button"}>{props.categoryName}</button>
            <div className={props.openCategories.includes(props.trigger) ? 'show' : 'hide'}>
                    {props.allArticleData[props.trigger].articles.map( (article, index) => (
                        <li key={index} >
                            <Link to={`/Articles/${props.trigger}/${article.id}`} className="sidebar-article-link" key={index}>{article.title}</Link>
                        </li>
                    ))}
            </div>
        </ul>
    );
}

export default SidebarCategory