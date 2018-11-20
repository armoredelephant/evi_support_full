import React from 'react';
import { Link } from 'react-router-dom'

const VideoList = ( props ) => {
    return (
        <section className="article-category-container" id="article-category-container">
            {Object.keys(props.categoryList).map( (category, index) => (
                <div key={index} className="article-category-wrapper">
                    <ul key={category} className="article-category-list">
                    <h3>{category}</h3>
                    <hr/>
                        {props.categoryList[category].videos.map( (video, index) => (
                            <li key={index}>
                                <Link to={`/Videos/${category}/${video.id}`} className="article-link">{video.title}</Link>
                             </li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    );
}

export default VideoList;