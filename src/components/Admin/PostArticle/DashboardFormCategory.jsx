import React from 'react';

const DashboardArticleCategory = ( props ) => {

    return (
        <label className="form-label">
            <div>Category</div>
            <select className="category-select" name='category' value={props.category} onChange={props.handleChange}>
                <option value='choose a category' disabled='disabled'>choose a category...</option>
                {props.categoryList.map((category) => (
                    <option key={category} value={category}>{category}</option> 
                ))}
            </select>
        </label>
    )
}

export default DashboardArticleCategory;

        