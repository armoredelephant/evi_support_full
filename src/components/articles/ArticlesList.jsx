import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

class ArticlesList extends Component {
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
            return null;
        } 

        const { categoryList } = this.state;

        return (
            <section className="article-category-container" id="article-category-container">
                {Object.keys(categoryList).map( (category, index) => (
                    <div key={index} className="article-category-wrapper">
                        <ul key={category} className="article-category-list">
                        <h3>{category}</h3>
                        <hr/>
                            {categoryList[category].articles.map( (article, index) => (
                                <li key={index}>
                                    <Link to={`/Articles/${category}/${article.id}`} className="article-link">{article.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>
        );
    }
}

export default ArticlesList;