import React, { Component } from 'react';

const Backdrop = ( props ) => {
    return (
        <div className="backdrop" onClick={props.backdropClick}>
            {/* Start Modal Here */}
        </div>
    )
}

export default Backdrop

// accept a prop that decides which component to display within the backdrop

// use a switch?

