import React, { Component, Fragment } from 'react';
import axios from 'axios';

import ArticleHelp from './ArticleHelp';
import Footer from '../StaticFooter';
import Header from '../StaticHeader';
import ItemList from '../Shared/ItemList';

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
        const sitePage = "Articles"

        return (
            <Fragment>
                <Header />
                <main role="main" className="article-landing-main">
                    <ArticleHelp />
                    <ItemList categoryList={categoryList} sitePage={sitePage} />
                </main>
                <Footer />
            </Fragment>
        );
    }
}

export default ArticlesLandingBody