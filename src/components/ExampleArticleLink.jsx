import React from 'react';
import axios from 'axios'

class ArticleLink extends React.Component {
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
            <div>
                <ul>
                    {/* {Object.keys(articleCategories).map(category => (
                        <li key={articleCategories[category].articles.id}>
                            <Link to={`"/Articles/${article}"`}>
                            </Link> 
                        </li>
                    ))} */}
                </ul>
            </div>
        )
    }
}

export default ArticleLink;