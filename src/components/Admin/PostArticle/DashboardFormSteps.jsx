import React from 'react';
import ImageButtonDisplay from '../../elements/ImageButtonDisplay';

const DashboardFormSteps = ( props ) => {
    console.log(props.uploadComplete)
    return (
        <ul className="steps-list">
            {props.steps.map((field, index) => {
                return (
                    <li key={index} >
                    <div>
                        <input 
                            onChange={props.handleStepInput}
                            name={index}
                            type="text" 
                            value={field.step} />
                    </div>
                    <div className="upload-image-div">
                        <input 
                            accept="image/png image/jpeg"
                            className="file-input" 
                            id={`file-input-${index}`} 
                            name={index} 
                            onChange={props.handleImage}
                            src="#" 
                            type="file" 
                            value={field.imgUrl} />
                        <label className="image-upload-label" 
                            htmlFor={`file-input-${index}`}
                            id="image-upload-label">
                        <ImageButtonDisplay 
                            uploadComplete={props.uploadComplete}
                            isLoading={props.isLoading}
                            imgName={field.imgName} />
                        </label>
                    </div>
                    </li>
                )
            })}
        </ul>
    )
}

export default DashboardFormSteps;

// need to add handleChange of the input to add image to state

// onChange also needs to edit the content of label