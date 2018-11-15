import React, { Component } from 'react';
import axios from 'axios';

import SidebarCategory from './SidebarCategory'

function ArticleSidebar(props) {
        return (
            <aside className="article-sidebar">
                <SidebarCategory categoryName="Applications" showArticles={props.showArticles} articleList={props.articleList} articleId={props.articleId} fetchArticleList={props.fetchArticleList} fetchArticleId={props.fetchArticleId} onClick={props.onClick} />
                <SidebarCategory categoryName="Hardware Setup" showArticles={props.showArticles} articleList={props.articleList} articleId={props.articleId} fetchArticleList={props.fetchArticleList} fetchArticleId={props.fetchArticleId} onClick={props.onClick} />
                <SidebarCategory categoryName="Hardware Use" showArticles={props.showArticles} articleList={props.articleList} articleId={props.articleId} fetchArticleList={props.fetchArticleList} fetchArticleId={props.fetchArticleId} onClick={props.onClick} />
                <SidebarCategory categoryName="Email" showArticles={props.showArticles} articleList={props.articleList} articleId={props.articleId} fetchArticleList={props.fetchArticleList} fetchArticleId={props.fetchArticleId} onClick={props.onClick} />
                <SidebarCategory categoryName="Other" showArticles={props.showArticles} articleList={props.articleList} articleId={props.articleId} fetchArticleList={props.fetchArticleList} fetchArticleId={props.fetchArticleId} onClick={props.onClick} />
            </aside>
        );
}

export default ArticleSidebar

// 