import React from 'react';
import { Link } from 'react-router-dom'

const ItemList = ( props ) => {
    console.log(props.categoryList)
    return (
        <section className="category-container" 
            id={props.sitePage == 'Articles' ?
                'article-category-container' : 
                'video-category-container'} >
            {Object.keys(props.categoryList).map( (category, index) => (
                <div key={index} className="category-wrapper">
                    <ul key={category} className="category-list">
                    <h3>{category}</h3>
                    <hr/>
                        {props.categoryList[category].categoryItems.map( (item, categoryItemIndex) => (
                            <li key={categoryItemIndex}>
                                <Link to={`/${props.sitePage}/${category}/${item.id}`} 
                                    className="item-link">
                                        {item.title}
                                </Link>
                             </li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    );
}

export default ItemList;