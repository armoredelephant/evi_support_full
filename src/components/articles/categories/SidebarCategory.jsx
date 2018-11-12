import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

class SidebarCategory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sidebarCategory: null,
            showArticles: false
        }
    }

    componentDidMount() {
        axios.get('/resources/stubs/article_structure.json').then(response => {
            this.setState(
                {
                    sidebarCategory: response.data[this.props.categoryName].articles
                }
            )
        })
    }

    toggleArticleList() {
        this.setState(
            {
                showArticles: !this.state.showArticles
            }
        )
    }

    render() {
        if (!this.state.sidebarCategory) {
            return null
        }

        const { sidebarCategory } = this.state 

        return (
            <ul>
                <button onClick={this.toggleArticleList()}>{this.props.categoryName}</button>
                {
                    this.state.showArticles ?
                        <React.Fragment>
                            {sidebarCategory.map( (article, index) => (
                                <li key={index} >
                                    <Link to={`/Articles/${sidebarCategory}/${article.id}`} className="article-link">{article.title}</Link>
                                </li>
                            ))}
                        </React.Fragment> :
                        null
                }
            </ul>
        );
    }
}

export default SidebarCategory