import React, { Component } from 'react';
import ArticleSidebar from './ArticleSidebar';


function ActualArticle(props) {

    return (
            <main role="main">
                <h2>{props.articleId.title}</h2>
                <h3>{props.articleId.description}</h3>
            </main>
    );
}

export default ActualArticle