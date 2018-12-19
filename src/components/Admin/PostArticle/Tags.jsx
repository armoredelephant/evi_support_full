import React from 'react';

const Tags = ( props ) => {

    return (
        <div className="tag-viewer-wrapper">
            <ul className="tag-viewer">
                {props.tags.map(tag => (
                    tag
                    ?
                        <li key={tag}>
                        {tag}
                        <button className='tag-delete-button' value={tag} onClick={props.handleTagDelete}>&#10006;</button>
                        </li>
                    :
                        ''
                ))}
            </ul>
        </div>
    );
}

export default Tags;