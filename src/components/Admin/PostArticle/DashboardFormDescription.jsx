import React from 'react';

const DashboardFormDescription = ( props ) => {
    return (
        <div className="form-label">
            <label htmlFor="form-description">Description</label>
            <textarea id="form-description" name='description' value={props.description} onChange={props.handleInputChange} />
        </div>
    )
}

export default DashboardFormDescription;