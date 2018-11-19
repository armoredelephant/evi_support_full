import React, { Fragment } from 'react';

import Backdrop from '../../elements/Backdrop';
import ImageFetch from './ImageFetch';

// this will be ran when one of the step buttons is clicked

const ImageViewer = ( props ) => {
    console.log(props.articleIdMatch)
    return (
        <Fragment>
            <Backdrop backdropClick={props.backdropClick} />
            <ImageFetch 
                articleIdMatch={props.articleIdMatch}
                currentCategory={props.currentCategory}
                currentStepId={props.currentStepId}
            />
        </Fragment>
        
    // ImgageFetch needs to receive the articleId.body.imageUrl and step
    // We need a backdrop component
    // We need a Image Viewing box that will be white and enough space for the image
    // The ImageLoader will need to receive the state and identify which IMG to open based on articletitle and step id?
    )
};

export default ImageViewer