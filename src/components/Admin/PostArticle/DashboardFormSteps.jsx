import React from 'react';
import ImageButtonDisplay from '../../elements/ImageButtonDisplay';

const DashboardFormSteps = ( props ) => {
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
                        <div className="image-upload-wrapper">
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
                            <div className="upload-image-div-remove">
                                    {props.adminAction === 'edit' && props.steps.length > 1
                                    ? <button name={`step-${index}`} className='image-remove-button' onClick={props.handleStepDelete}>Remove step</button>
                                    : null }
                            </div>
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