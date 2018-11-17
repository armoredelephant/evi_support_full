import React, { Component } from 'react';
import axios from 'axios';

import ArticlesList from './ArticlesList';
import ArticleHelp from './ArticleHelp';

class ArticlesLandingBody extends Component {
    constructor() {
        super()
        this.state = {
            categoryList: null
        }
    }

    componentDidMount() {
        axios.get('/resources/stubs/article_structure.json').then( response => {
            this.setState(
                {
                    categoryList: response.data
                }
            )
        });
    }

    render() {
        if (!this.state.categoryList) {
            return null
        }

        const { categoryList } = this.state;

        return (
            <main role="main" className="article-landing-main">
                <ArticleHelp />
                <ArticlesList categoryList={categoryList}/>
            </main>
        );
    }
}

export default ArticlesLandingBody