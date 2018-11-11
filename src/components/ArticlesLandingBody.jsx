import React, { Component, Fragment } from 'react';

import ArticlesList from './articles/ArticlesList'
import ArticleHelp from './articles/ArticleHelp'

class ArticlesLandingBody extends Component {
    render() {
        return (
            <main role="main" className="article-landing-main">
                <ArticleHelp />
                <ArticlesList />
            </main>
        );
    }
}

export default ArticlesLandingBody