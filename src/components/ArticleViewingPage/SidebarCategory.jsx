import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'

// import ManageLinks from '../elements/ManageLinks';
// import ArticleLinks from './ArticleLinks';

function SidebarCategory(props) {
    return (
        <ul className="article-sidebar-list">
            <button data-trigger={props.trigger} onClick={props.onClick} className={props.openCategories.includes(props.trigger) ? "article-category-button-active" : "article-category-button"}>{props.categoryName}</button>
            <div className={props.openCategories.includes(props.trigger) ? 'show' : 'hide'}>
                {props.allArticleData[props.trigger].articles.map( (article, index) => (
                    <li key={index} >
                        <Link to={`/Articles/${props.trigger}/${article.id}`} onClick={props.handleActiveArticle} className={props.activeArticleLink === article.title ? "sidebar-article-link-active" : "sidebar-article-link"}  key={index}>{article.title}</Link>
                    </li>
                    ))}
            </div>
        </ul>
    );z
}

export default SidebarCategory