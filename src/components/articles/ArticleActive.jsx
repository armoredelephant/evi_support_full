import React from 'react';
import axios from 'axios'

import ArticleSidebar from './ArticleSidebar'

class ArticleActive extends React.Component {
    constructor() {
        super()
        this.state = {
            currentArticle: null
        }
    }
            
    componentDidMount() {
        axios.get('/resources/stubs/article_structure.json').then(response => {
            const currentArticle = response.data[this.props.match.params.category].articles.find(
                article => {
                    return article.id == this.props.match.params.articleId
                }
            )
            
            this.setState({ currentArticle })

        })
    }

    render() {
        if (!this.state.currentArticle) {
            return null
        }

        const { currentArticle } = this.state

        return (
            <React.Fragment>
                <ArticleSidebar />
            </React.Fragment>

        )
    }
}

export default ArticleActive;