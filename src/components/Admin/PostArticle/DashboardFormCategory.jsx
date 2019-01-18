import React from 'react';

const DashboardArticleCategory = ( props ) => {

    return (
        <div className="form-label">
            <label htmlFor="form-select">Category</label>
            <select id="form-select" className="category-select" name='category' value={props.category} onChange={props.handleChange}>
                <option value='choose a category' disabled='disabled'>choose a category...</option>
                {props.categoryList.map((category) => (
                    <option key={category} value={category}>{category}</option> 
                ))}
            </select>
        </div>
    )
}

export default DashboardArticleCategory;

        