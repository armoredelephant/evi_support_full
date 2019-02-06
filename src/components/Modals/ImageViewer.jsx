import React from 'react';
import ModalWrapper from '../elements/ModalWrapper';

const ImageViewer = props => {
    return (
            <ModalWrapper {...props} >
                <img className="loaded-image" 
                    src={props.imgURL}
                />
            </ModalWrapper>
    );
};

export default ImageViewer;