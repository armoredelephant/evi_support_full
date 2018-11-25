import React from 'react';

import ModalConductor from '../elements/ModalConductor';

const ActualArticle = ( props ) => {
    const currentModal = 'IMAGE_LOADER';

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
            {props.displayModal 
            ? 
                <ModalConductor 
                    currentModal={currentModal} 
                    currentCategory={props.currentCategory}
                    currentStepId={props.currentStepId}
                    itemIdMatch={props.itemIdMatch}
                    hideModal={props.hideModal} /> 
            : 
                ''}
        </main>
    );
};

export default ActualArticle;