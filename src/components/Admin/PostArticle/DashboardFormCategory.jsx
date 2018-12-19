import React from 'react';

// this can be refactored to consume and map through categories.

const PostArticleCategory = ( props ) => {

    return (
        <label className="form-label">
            <div>Category</div>
            <select className="category-select" value={props.category} onChange={props.handleChange}>
                <option value='choose a category' disabled='disabled'>choose a category...</option>
                <option value='applications'>Applications</option>
                <option value='email'>Email</option>
                <option value='hardware setup'>Hardware Setup</option>
                <option value='hardware use'>Hardware Use</option>
                <option value='other'>Other</option>
            </select>
        </label>
    )
}

export default PostArticleCategory;


/**
 * <select className='category-select' value={props.category} onChange={props.handleChange}>
 *      <option value='chooose a category' disabled='disabled'>choose a category ... </option>
 *      {props.categoryList.map(category => {
 *          <option value=`${category}`>category</option>
 *      })}
 * </select>
 */

        