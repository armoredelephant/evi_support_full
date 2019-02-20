import React from 'react';

import ModalConductor from '../elements/ModalConductor';

const ActualArticle = ( props ) => {
    const currentModal = 'IMAGE_LOADER';

    // const currentTitle = props.currentItemId.title
    // const currentImage = props.currentItemId.body[props.currentStepIndex].imgName || null
    // const stepArray = props.currentItemId.body
    // const currentImage = stepArray[props.currentStepIndex].imgName
    // console.log(currentImage)

    return (
        <main role="main" className="article-view-main" id="article-view-main">
            <div className="article-view-wrapper">
                <h2 className="article-title">{props.currentItemId.title}</h2>
                <hr/>
                <h3 className="article-into">{props.currentItemId.description}</h3>
                <ol>
                    {props.currentItemId.body.map((currentStep, index) => ( 
                    // ('imgName' in props.currentItemId.body[index])
                    currentStep.imgName
                    ? 
                        <li key={index} className="article-step__image">
                            <button key={currentStep.imgIndex} 
                                className="article-step-button"
                                currentstep={currentStep.imgIndex}
                                onClick={(event) => props.click(event, currentStep.imgIndex)}
                                value={currentStep} >
                                    {currentStep.step}
                            </button>
                        </li> 
                    :
                        <li key={index} className="article-step">
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
                    currentStepIndex={props.currentStepIndex}
                    itemIdMatch={props.itemIdMatch}
                    imgURL={props.imgURL}
                    hideModal={props.hideModal} /> 
            : 
                ''}
        </main>
    );
};

export default ActualArticle;