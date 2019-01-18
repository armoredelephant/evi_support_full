import React, { Fragment } from 'react';

const DashboardFormArticleList = ( props ) => {
    return (
        <div className="form-label">
            <label htmlFor="form-article-select">Article</label>
            <select id="form-article-select" className="category-select" name='article' value={props.title} onChange={props.handleChange}>
                <option value='choose an article' disabled='disabled'>choose an article...</option>
                {props.titleList.map((articleTitle) => (
                    <option key={articleTitle} value={articleTitle}>{articleTitle}</option> 
                ))}
            </select>
        </div>
    )
}

export default DashboardFormArticleList;