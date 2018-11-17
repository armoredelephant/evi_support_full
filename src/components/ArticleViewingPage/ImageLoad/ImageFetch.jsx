import React from 'react';

const ImageFetch = ( props ) => {

    return(
        <div className='image-container'>
            <img src={props.imgUrl}/>
        </div>
    )
}

export default ImageFetch;