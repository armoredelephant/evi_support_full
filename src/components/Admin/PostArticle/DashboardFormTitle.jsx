import React from 'react';

const DashboardFormTitle = ( props ) => {
    return (
        <label className="form-label">
            <div>Title</div>
            <input name='title' type="text" value={props.title} onChange={props.handleInputChange} />
        </label>
    )
}

export default DashboardFormTitle;