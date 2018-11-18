import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const ArticleLinks = ( props ) => {
    return (
        <Fragment>
                <li key={props.trigger} >
                    <Link to={`/Articles/${props.categoryName}/${props.articleTrigger.id}`} 
                        data-trigger={props.trigger} 
                        onClick={props.onClick} 
                        className={props.clickedLink.includes(props.trigger) ? "sidebar-article-link-active" : "sidebar-article-link"} 
                        key={props.trigger}>{props.articleTrigger.title}
                    </Link>
                </li>
        </Fragment>
    );
}

export default ArticleLinks;