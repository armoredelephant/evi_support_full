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
    }
}

    componentDidMount() {
        this.axiosFetchArticles()
        console.log(this.state.categoryNames)
    }

    axiosFetchArticles = () => {
        return axios.get('/resources/stubs/article_structure.json').then(response => {
            const categoryNames = Object.keys(response.data)
            const currentArticleList = response.data[this.props.match.params.category].articles
            const currentArticleId = response.data[this.props.match.params.category].articles.find(
                article => {
                    return article.id == this.props.match.params.articleId
                }
            )
            
            this.setState({ currentArticleList, currentArticleId, categoryNames })
        })
    }

    render() {
        if (!this.state.categoryNames) {
            return null
        }

        const { categoryNames, currentArticleList, currentArticleId } = this.state
        
        return (
            <div className="view-article-container">
                <ArticleSidebar 
                    articleList={currentArticleList} 
                    articleId={currentArticleId}
                    categoryNames={categoryNames}
                />
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
