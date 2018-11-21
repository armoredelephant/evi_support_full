import React, { Component } from 'react'

const Backdrop = ( props ) => {
    return (
        <div className="backdrop" onClick={props.backdropClick}></div>
    )
}

export default Backdrop