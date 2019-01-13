import React from 'react';

// this can be refactored to consume and map through categories.

const DashboardArticleCategory = ( props ) => {

    return (
        <label className="form-label">
            <div>Category</div>
            <select className="category-select" value={props.category} onChange={props.handleChange}>
                <option value='choose a category' disabled='disabled'>choose a category...</option>
                {props.categoryList.map((category, categoryIndex) => (
                    <option key={category} value={category}>{category}</option> 
                ))}
            </select>
        </label>
    )
}

export default DashboardArticleCategory;

        