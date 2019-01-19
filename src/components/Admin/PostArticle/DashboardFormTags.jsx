import React, { Fragment } from 'react';

import Tags from './Tags';

const DashboardFormTags = ( props ) => {
    return (
        <Fragment>
            <div className="tag-div">
                <label className="form-label tag-label">
                    <div>Tags</div>
                    <input name='tagInput' type='text' value={props.tagInput} onChange={props.handleInputChange} />
                </label>
                <button className="form-button" onClick={props.handleTags}>Add</button>
            </div>
            <Fragment>
                {props.tags.length !== 0 
            ?
                <Tags tags={props.tags} handleTagDelete={props.handleTagDelete}/>
            :
                ''
            }
            </Fragment>
        </Fragment>
    );
}

export default DashboardFormTags;