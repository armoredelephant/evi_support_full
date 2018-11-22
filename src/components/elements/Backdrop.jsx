import React, { Component } from 'react'

const Backdrop = ( props ) => {
    return (
        <div className="backdrop" onClick={props.backdropClick}>
            {/* Start Modal Here */}
        </div>
    )
}

export default Backdrop