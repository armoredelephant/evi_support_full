import React, { Component, Fragment } from 'react';

import ArticlesList from './ArticlesList'
import ArticleHelp from './ArticleHelp'

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