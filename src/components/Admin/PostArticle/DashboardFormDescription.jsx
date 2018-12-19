import React from 'react';

const DashboardFormDescription = ( props ) => {
    return (
        <label className="form-label">
            <div>Description</div>
            <textarea name='description' value={props.description} onChange={props.handleInputChange} />
        </label>
    )
}

export default DashboardFormDescription;