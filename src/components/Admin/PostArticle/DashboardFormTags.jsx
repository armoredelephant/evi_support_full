import React, { Fragment } from 'react';

import Tags from './Tags';

const DashboardFormTags = ( props ) => {
    return (
        <Fragment>
            <div className="tag-div">
                <div className="form-label tag-label">
                    <label htmlFor='tagInput'>Tags</label>
                    <input name='tagInput' type='text' value={props.tagInput} onChange={props.handleInputChange} />
                </div>
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