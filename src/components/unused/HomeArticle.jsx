import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class HomeArticle extends Component {
    render() {
        const { article } = this.props

        return (
            <Link to="#" className="article-link">
                <li className="flex-item frequent-article">
                    <h3>{article}</h3>
                </li>
            </Link>
        );
    }
}

export default HomeArticle