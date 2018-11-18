import React from 'react';

const ArticleSteps = ( props ) => {
    return(
        <Fragment>
            
                {currentStep.hasImage 
                ? 
                    <li key={currentStep.stepId} className="article-step__image">
                        <button key={currentStep.stepId} 
                            onClick={props.click} 
                            className="article-step-button"
                            currentstep={currentStep.stepId}>
                                {currentStep.step}
                        </button>
                    </li> 
                :
                    <li key={currentStep.stepId} className="article-step">
                        {currentStep.step}
                    </li>
                }
        </Fragment>
    );
}

export default ArticleSteps