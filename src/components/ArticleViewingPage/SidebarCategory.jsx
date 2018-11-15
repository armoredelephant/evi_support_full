import React, { Component } from 'react';
import { Link } from 'react-router-dom'

function SidebarCategory(props) {
        return (
            <ul>
                <button onClick={props.onClick}>{this.props.categoryName}</button>
                {
                    props.showArticles ?
                        <React.Fragment>
                            {props.fetchArticleList.map( (article, index) => (
                                <li key={index} >
                                    <Link to={`/Articles/${this.props.categoryName}/${article.id}`} className="article-link" key={index}>{article.title}</Link>
                                </li>
                            ))}
                        </React.Fragment> :
                        null
                }
            </ul>
        );
}

export default SidebarCategory