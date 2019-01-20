import React from 'react';

const DashboardFormStepButtons = ( props ) => {
    return (
        <div className="add-step-div">
            <div className="form-label">
                <label htmlFor='addStep'>{props.stepAction}</label>
            </div>
            <div className="form-step-buttons">
                <button name='addStep'className="add-step-button" onClick={props.handleStepAdd}>&#x2795;</button>
                {props.adminAction === 'edit'
                ? <button name='deleteStep' className='add-step-button' onClick={props.handleStepAdd}>&#8722;</button>
                : null }
            </div>
        </div>
    )
}

export default DashboardFormStepButtons;