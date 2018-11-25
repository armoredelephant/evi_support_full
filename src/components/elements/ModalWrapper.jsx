import React from 'react';

const ModalWrapper = ( props ) => {
    const handleBackgroundClick = e  => {
        if (e.target === e.currentTarget) props.hideModal();
    };

    return (
        <div className="backdrop" onClick={handleBackgroundClick}>
            {props.children}
        </div>
    );
}

export default ModalWrapper;