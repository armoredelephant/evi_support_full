import React, { Fragment } from 'react';

const ModalWrapper = ( props ) => {
    const handleBackgroundClick = e  => {
        if (e.target === e.currentTarget) props.hideModal();
    };
    
    const modalLayout = props.needsLayout 
        ? (
            <div className="modal-wrapper">
                <header>
                        <h2>{props.title}</h2>
                        <button onClick={props.hideModal}><i className="far fa-window-close"></i></button>
                </header>
                {props.children}
                <footer>
                    <h4>{props.footer}</h4>
                </footer>
            </div>
        )
        : (
            <Fragment>
                {props.children};
            </Fragment>
        );
    
    return (
        <div className="backdrop" onClick={handleBackgroundClick}>
            {modalLayout}
        </div>
    );
}

export default ModalWrapper;