import React from 'react';

const DashboardFormTitle = ( props ) => {
    return (
        <div className="form-label">
            <label htmlFor="form-title">Title</label>
            <input id="form-title" name='title' type="text" value={props.title} onChange={props.handleInputChange} />
        </div>
    );
}

export default DashboardFormTitle;