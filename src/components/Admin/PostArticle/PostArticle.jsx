import React, { Component } from 'react';

import DashboardFormCategory from './DashboardFormCategory';
import DashboardFormDescription from './DashboardFormDescription';
import DashboardFormTitle from './DashboardFormTitle';
import Tags from './Tags';

// this can be refactored to consume the category from backend and set it in the state to pass down as props.
// use AxiosFetch from shared?

class PostArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: 'choose a category',
            title: '',
            description: '',
            tagInput: '',
            tags: [],
            imageChecked: false,
            steps: {} // will be steps: {step: text, image: 'url', stepId: will be push id}
        }
    }

    handleChange = ( event ) => {
        this.setState({ category: event.target.value })
    }

    handleInputChange = ( event ) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleTags = ( e ) => {
        e.preventDefault();
        const { tags, tagInput } = this.state;
        const prevTagsArray = tags;
        const splitTags = tagInput.split(/[';']/g)
            .map(tag => tag.trim() )
            .filter(tag => tag !== '' );

        const newTagsArray = prevTagsArray.concat(splitTags)
        
        this.setState({
            tagInput: '',
            tags: newTagsArray
        })
    }

    handleTagDelete = ( event ) => {
        event.preventDefault();
        const target = event.target
        const { tags } = this.state
        const newTagArray = tags.filter(tag => { return tag !== target.value })

        this.setState({
            tags: newTagArray
        })

    }

    handleStep = ( event ) => {
        event.preventDefault();
        const target = event.target
        const { steps } = this.state
        

    }

    handleSubmit = () => {
        // this will post to the backend/db

        // need switch to handle where to post based on category

        // make an object {title: '', description: '', body: '', tags: []} 

        // tried doing it in the state, but broke the inputs.
    }

    // can refactor each section of the form into it's own component?

    render() {
        const { category, description, tagInput, tags, title } = this.state;

        return (
            <div className="form-wrapper">
                <form className="form-post-article">
                    <DashboardFormCategory 
                        handleChange={this.handleChange} 
                        category={category} />
                    <DashboardFormTitle 
                        handleInputChange={this.handleInputChange} 
                        title={title} />
                    <DashboardFormDescription 
                        description={description} 
                        handleInputChange={this.handleInputChange} />
                    <div className="tag-div">
                        <label className="form-label tag-label">
                            <div>Tags</div>
                            <input name='tagInput' type='text' value={tagInput} onChange={this.handleInputChange} />
                        </label>
                        <button className="tag-button" onClick={this.handleTags}>Add</button>
                    </div>
                    {tags.length !== 0 
                    ?
                        <Tags tags={tags} handleTagDelete={this.handleTagDelete}/>
                    :
                        ''
                    }
                    <div className="add-step-div">
                        <label className="form-label">
                            <div>Add Step</div>
                        </label>
                        <button className="add-step-button" onClick={this.handleStep}>&#x2795;</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default PostArticle;