import React, { Fragment, Component } from 'react';

import Backdrop from '../../elements/Backdrop';

// this will be ran when one of the step buttons is clicked

const ImageViewer = ( props ) => {
    return (
        <Fragment>
            <Backdrop backdropClick={props.backdropClick}/>
        </Fragment>
        
    // We need a backdrop component
    // We need a Image Viewing box that will be white and enough space for the image
    // The ImageLoader will need to receive the state and identify which IMG to open based on articletitle and step id?
    )
};

export default ImageViewer