import React, { Component } from 'react';

import DashboardFormCategory from './DashboardFormCategory';
import DashboardFormDescription from './DashboardFormDescription';
import DashboardFormSteps from './DashboardFormSteps';
import DashboardFormTitle from './DashboardFormTitle';
import Tags from './Tags';
import axios from 'axios';

const API_HOST_URL = process.env.API_URL;

// this can be refactored to consume the category from backend and set it in the state to pass down as props.
// use AxiosFetch from shared?

class PostArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: 'choose a category',
            categoryItemCount: 0,
            description: '',
            imageChecked: false,
            steps: [{step: '', imgName: null, imgData: ''}],
            title: '',
            tagInput: '',
            tags: []
        }
    }

    componentDidMount() { 
        const options = {
            category: this.state.category
        }

        axios.get(`${API_HOST_URL}/api/dashboard/`, options)
            .then(response => {
                // const { itemCount } = response.data <== can this work?
                const itemCount = response.data.itemCount

                this.setState({ 
                    categoryItemCount: Object.keys(itemCount).length 
                })
            })
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

    // add a conditional check to not allow adding the same tag twice
    
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
        const { steps } = this.state
        const arrayOfSteps = Array.from(steps)
        const nextStep = { step: '', imgName: null, imgData: '' }
        const updatedSteps = [...arrayOfSteps, nextStep];

        this.setState({
            steps: updatedSteps
        })
    }

    handleStepInput = ( event ) => {
        const target = event.target;
        const value = target.value;
        const { steps } = this.state;

        let oldSteps = Array.from(steps);

        oldSteps[target.name].step = value;

        const newSteps = oldSteps;

        this.setState({
            steps: newSteps
        })
    }

    handleImage = ( event, files ) => {
        const target = event.target
        const { steps } = this.state;

        let oldSteps = Array.from(steps);

        oldSteps[target.name].imgName = files[0].name
        oldSteps[target.name].imgData = files[0] 
        
        const newSteps = oldSteps

        this.setState({
            steps: newSteps
        })
    }

    handleSubmit = ( event ) => {
        // event.preventDefault();

        const { category, description, steps, tags, title } = this.state;

        const API_HOST_URL = process.env.API_URL;

        const options = {
            category: category,
            description: description,
            steps: steps,
            tags: tags,
            title: title
        }

        axios.post(`${API_HOST_URL}/api/dashboard/post-article`, options)
            .then(response => {
                console.log(response)
                alert(response.body.message)
            })
            .catch(error => {
                console.log(error)
            });


        // this will post to the backend/db

        // need switch to handle where to post based on category

        // make an object {title: '', description: '', body: '', tags: []} 

        // tried doing it in the state, but broke the inputs.
    }

    // can refactor each section of the form into it's own component?

    render() {
        const { category, description, steps, tagInput, tags, title } = this.state;

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
                        <button className="form-button" onClick={this.handleTags}>Add</button>
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
                    {steps.length !== 0
                    ?
                        <DashboardFormSteps 
                            handleImage={this.handleImage} 
                            handleStepInput={this.handleStepInput} 
                            steps={steps} />
                    :
                        ''
                    }
                    <div className="submit-wrapper">
                        <button className="form-button submit-button" onClick={this.handleSubmit}>
                        Submit
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default PostArticle;