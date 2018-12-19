import React from 'react';

const DashboardFormSteps = ( props ) => {
    return (
        <ul>
            {props.steps.map((field, index) => {
                <li key={index} >
                    <input type="text" value={field.step} onChange={props.handleStepInput} />
                    <button>Upload</button>
                </li>
            })}
        </ul>
    )
}

export default DashboardFormSteps;