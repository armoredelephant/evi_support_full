import React, { Component } from 'react'

const Backdrop = ( props ) => {
    return (
        <div className="backdrop" data-trigger={props.articleId} onClick={props.backdropClick}></div>
    )
}

export default Backdrop