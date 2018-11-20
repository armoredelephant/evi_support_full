import React from 'react';
import { Link } from 'react-router-dom'

const ArticlesList = ( props ) => {
    return (
        <section className="category-container" id="article-category-container">
            {Object.keys(props.categoryList).map( (category, index) => (
                <div key={index} className="category-wrapper">
                    <ul key={category} className="category-list">
                    <h3>{category}</h3>
                    <hr/>
                        {props.categoryList[category].articles.map( (article, index) => (
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

export default ArticlesList;