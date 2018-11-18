import React from 'react';

const ImageFetch = ( props ) => {

    return(
        <div className='image-container'>
            <img src={`/resources/images/${props.currentCategory}/${props.articleId}/${props.stepId}`}/>
        </div>
    )
}

export default ImageFetch;