import React, { Component } from 'react';
import { Link } from 'react-router-dom'

function SidebarCategory(props) {

    const articleList = props.fetchArticleList
    
    return (
        <ul>
            <button data-trigger={props.trigger} onClick={props.onClick}>{props.categoryName}</button>
            <div className={props.openCategories.includes(props.trigger) ? 'show' : 'hide'}>
                {props.articleList.map( (article, index) => (
                    <li key={index} >
                        <Link to={`/Articles/${props.categoryName}/${article.id}`} className="article-link" key={index}>{article.title}</Link>
                    </li>
                ))}
            </div>
        </ul>
    );
}

export default SidebarCategory