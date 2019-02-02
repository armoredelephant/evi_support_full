import React from 'react';
import Loading from './Loading';

const ImageButtonDisplay = ( props ) => {
    if (props.imageIsLoading) {
        return Loading({ type: 'bars', color: '#FFFFFF' })
    } else if (props.imgName) {
        return `${props.imgName}`
    } else {
        return 'Add Image'
    }
}

export default ImageButtonDisplay;