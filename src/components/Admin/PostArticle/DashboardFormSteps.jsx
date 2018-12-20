import React from 'react';

const DashboardFormSteps = ( props ) => {
    return (
        <ul className="steps-list">
            {props.steps.map((field, index) => {
                return (
                    <li key={index} >
                    <div>
                        <input type="text" value={field.step} onChange={props.handleStepInput} />
                    </div>
                    <input id="file-input" className="file-input" value={field.imgUrl} name="image-upload" type="file" src="#" alt="Submit" onChange={(e) => props.handleImage(e.target.files, index)} />
                    <div className="upload-image-div">
                        <label className="image-upload-label" htmlFor="file-input">
                        {field.imgName
                        ?
                            `${field.imgName}`
                        :
                            'Add Image'
                        }
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