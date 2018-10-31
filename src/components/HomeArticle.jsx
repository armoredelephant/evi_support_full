import React from 'react';
import { Link } from 'react-router-dom';


class HomeArticle extends React.Component {
    render() {
        return (
            <Link to="#" className="article-link">
                <li className="flex-item frequent-article">
                    <h3>{this.props.article}</h3>
                </li>
            </Link>
        );
    }
}

export default HomeArticle