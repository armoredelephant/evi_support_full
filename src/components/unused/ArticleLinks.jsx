import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const ArticleLinks = ( props ) => {
    return (
        <Fragment>
            {/* {props.allArticleData[props.categoryName].articles.map( (article, index) => (
                <li key={index} >
                    <Link to={`/Articles/${props.trigger}/${article.id}`} data-trigger={props.trigger} onClick={props.onClick} className={(`/Articles/${props.trigger}/${article.id}` === props.href) ? "sidebar-article-link-active" : "sidebar-article-link"} key={index}>{article.title}</Link>
                </li>
            ))} */}
        </Fragment>
    );
}

export default ArticleLinks;