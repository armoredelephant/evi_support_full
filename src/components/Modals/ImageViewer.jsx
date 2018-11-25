import React from 'react';

import ModalWrapper from '../elements/ModalWrapper';

const ImageViewer = props => {
    return (
            <ModalWrapper {...props} >
                <img className="loaded-image" 
                    src={`/resources/images/${props.currentCategory}/${props.itemIdMatch}/${props.currentStepId}.png`}
                />
            </ModalWrapper>
    );
};

export default ImageViewer;