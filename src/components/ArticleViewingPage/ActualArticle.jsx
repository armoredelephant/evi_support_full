import React, { Component, Fragment } from 'react';

import ImageViewer from './ImageLoad/ImageViewer';

//receive props from the updated data for currentarticleId and set it's own state for the current stepId?

const ActualArticle = ( props ) => {
    let component = (
        <Fragment>
            <ImageViewer
                itemIdMatch={props.itemIdMatch}
                displayBackdrop={props.displayBackdrop}
                backdropClick={props.backdropClick}
                currentCategory={props.currentCategory}
                currentStepId={props.currentStepId}
            />
        </Fragment>
    )
    
    return (
        <main role="main" className="article-view-main" id="article-view-main">
            <div className="article-view-wrapper">
                <h2 className="article-title">{props.currentItemId.title}</h2>
                <hr/>
                <h3 className="article-into">{props.currentItemId.description}</h3>
                <ol>
                    {props.currentItemId.body.map(currentStep => (
                    currentStep.hasImage 
                    ? 
                        <li key={currentStep.stepId} className="article-step__image">
                            <button key={currentStep.stepId} 
                                className="article-step-button"
                                currentstep={currentStep.stepId}
                                onClick={(event) => props.click(event, currentStep.stepId)} >
                                    {currentStep.step}
                            </button>
                        </li> 
                    :
                        <li key={currentStep.stepId} className="article-step">
                            {currentStep.step}
                        </li>
                    ))}
                </ol>
            </div>
            {props.displayBackdrop ? component : ''}
        </main>
    )
}

export default ActualArticle