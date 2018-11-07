import React from 'react';
import { Link } from 'react-router-dom';

class ArticleLink extends React.Component {
    constructor() {
        super()
        this.state = {
            articleCategories = null
        }
    }

    componentDidMount() {
        axios.get('/resources/stubs/article_structure.json').then(response => {
            this.setState(
                {
                    articleCategories = response.data
                }
            )
        })
    }

    render() {
        if (!this.state.articleCategories) {
            return null
        }

        const { articleCategories } = this.state

        return (
            <div>
                <ul>
                    {Object.keys(articleCategories).map(category => (
                        <li key={category.article.id}>
                            <Link to={`/Articles/${category.articles.id}`} 
                                className="article-link" 
                                articleTitle={`${category.articles.title}`} 
                                articleDescription={`${category.articles.description}`}>
                            </Link> 
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default HomeListItem;