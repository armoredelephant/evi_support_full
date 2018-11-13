import React from 'react';
import axios from 'axios'

import ArticleSidebar from './ArticleSidebar'
import ActualArticle from './ActualArticle'

class ArticleActive extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentArticle: null,
        }
    }
    axiosFetch() {
        axios.get('/resources/stubs/article_structure.json').then(response => {
            const currentArticle = response.data[this.props.match.params.category].articles.find(
                article => {
                    return article.id == this.props.match.params.articleId
                }
            )
            
            this.setState({ currentArticle })

        })
    }
    componentDidMount() {
        this.axiosFetch()
    }

    componentDidUpdate(prevState) {
        // if (prevState.currentArticle !== this.state.currentArticle) {
        this.axiosFetch()
    }

    render() {
        if (!this.state.currentArticle) {
            return null
        }

        const { currentArticle } = this.state
        
        return (
            <React.Fragment>
                <ArticleSidebar />
                <ActualArticle articleId={currentArticle} key={currentArticle.title}/>
            </React.Fragment>

        )
    }
}

export default ArticleActive;