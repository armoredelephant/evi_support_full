import React from 'react';
import axios from 'axios'

import ArticleSidebar from './ArticleSidebar'
import ActualArticle from './ActualArticle'

class ArticleActive extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            categoryNames: null,
            currentArticleList: null,
            currentArticleId: null,
            showArticles: false
    }
}

    componentDidMount() {
        this.axiosFetchArticles()
    }

    renderArticle() {
        const { showArticles, articleList, articleId } = this.state

        return (
            <ArticleSidebar showArticles={showArticles} articleList={articleList} articleId={articleId} fetchArticleList={() => this.axiosFetchArticles()} fetchArticleId={() => this.axiosFetchArticleId()} onClick={() => this.handleClick()}/>
        )
    }

    axiosFetchArticles = () => {
        return axios.get('/resources/stubs/article_structure.json').then(response => {
            const categoryNames = Object.keys(response.data).map(category => category)
            const currentArticleList = response.data[this.props.match.params.category].articles
            const currentArticleId = response.data[this.props.match.params.category].articles.find(
                article => {
                    return article.id == this.props.match.params.articleId
                }
            )
            
            this.setState({ currentArticleList, currentArticleId, categoryNames })
        })
    }

    handleClick = () => {
        this.setState(prevState => ({
            showArticles: !prevState.showArticles
        }))
    }

    render() {
        if (!this.state.currentArticle) {
            return null
        }

        const { showArticles, articleList, articleId } = this.state
        
        return (
            <div className="view-article-container">
                {this.renderArticle()}
                {/* <ActualArticle articleId={currentArticle} key={currentArticle.title}/> */}
            </div>

        )
    }
}

export default ArticleActive;

/* 
    State can be set here for all child components as currentArticle and button as showArticles

    Sidebar:
        - Category as button
            - Button needs click handler who's event needs to be passed down
            - Click handler can be created here and passed down as a function
        - Article title as li>Link

    Artcile: 
        - Needs to receive props for article
*/
