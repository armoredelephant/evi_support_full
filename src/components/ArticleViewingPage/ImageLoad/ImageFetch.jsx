import React from 'react';

const ImageFetch = ( props ) => {

    return(
        <img className="loaded-image" 
            src={`/resources/images/${props.currentCategory}/${props.itemIdMatch}/${props.currentStepId}.png`}
        />
    )
}

export default ImageFetch;