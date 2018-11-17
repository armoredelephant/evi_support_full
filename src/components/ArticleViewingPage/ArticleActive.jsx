import React from 'react';
import axios from 'axios';

import ArticleSidebar from './ArticleSidebar';
import ActualArticle from './ActualArticle';

class ArticleActive extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            allArticleData: null,
            categoryNames: null,
            currentArticleList: null,
            currentArticleId: null,
            displayImage: false,
    }
}

    componentDidMount() {
        this.axiosFetchArticles();
    }

    changeDisplayImage = () => {
        this.setState(prevState => ({
            displayImage: !prevState.displayImage
        }));
    }

    handleArticleClick = () => {
        console.log("hello")
    }

    backdropClickHandler = () => {
        this.setState({
            displayImage: false
        });
    }

    axiosFetchArticles = () => {
        return axios.get('/resources/stubs/article_structure.json').then(response => {
            const allArticleData = response.data
            const categoryNames = Object.keys(response.data)
            const currentArticleList = response.data[this.props.match.params.category].articles
            const currentArticleId = response.data[this.props.match.params.category].articles.find(
                article => {
                    return article.id == this.props.match.params.articleId
                }
            )
            
            this.setState({ allArticleData, currentArticleList, currentArticleId, categoryNames });
        });
    }

    componentDidUpdate(prevProps) {
        if(prevProps.match.url !== this.props.match.url) {
            const allArticleData = this.state.allArticleData
            const currentArticleId = allArticleData[this.props.match.params.category].articles.find(
                article => {
                    return article.id == this.props.match.params.articleId
                }
            )
            
            this.setState({ currentArticleId })
        }
    }

    render() {
        if (!this.state.categoryNames) {
            return null
        }

        const { allArticleData, categoryNames, currentArticleList, currentArticleId, displayImage } = this.state
        
        return (
            <div className="view-article-container">
                <ArticleSidebar 
                    allArticleData={allArticleData}
                    articleList={currentArticleList} 
                    articleId={currentArticleId}
                    categoryNames={categoryNames}
                    handleArticleClick={this.handleArticleClick}
                />
                <ActualArticle 
                    articleId={currentArticleId}
                    articleIdMatch={this.props.match.params.articleId}
                    backdropClick={this.backdropClickHandler}
                    click={this.changeDisplayImage}
                    displayImage={displayImage}
                    key={currentArticleId.title}
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
