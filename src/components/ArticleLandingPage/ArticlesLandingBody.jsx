import React, { Component } from 'react';
import axios from 'axios';

import ArticleHelp from './ArticleHelp';
import ItemList from '../Shared/ItemList';

class ArticlesLandingBody extends Component {
    constructor() {
        super()
        this.state = {
            categoryList: null
        }
    }

    componentDidMount() {
        console.log(process.env);
        axios.get('http://localhost:3000').then( response => {
            console.log(response.data);
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
        const sitePage = "Articles"

        return (
            <main role="main" className="article-landing-main">
                <ArticleHelp />
                <ItemList categoryList={categoryList} sitePage={sitePage} />
            </main>
        );
    }
}

export default ArticlesLandingBody