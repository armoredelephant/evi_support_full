import React, { Component } from 'react';

import DashboardFormCategory from './DashboardFormCategory';
import DashboardFormDescription from './DashboardFormDescription';
import DashboardFormStepButtons from './DashboardFormStepButtons';
import DashboardFormSteps from './DashboardFormSteps';
import DashboardFormTags from './DashboardFormTags';
import DashboardFormTitle from './DashboardFormTitle';
import Tags from './Tags';
import axios from 'axios';

const API_HOST_URL = process.env.API_URL;

// this can be refactored to consume the category from backend and set it in the state to pass down as props.
// use AxiosFetch from shared?

// Refactor to store state in ManageArticle and use callback functions instead?

class PostArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: 'choose a category',
            description: '',
            steps: [{step: '', imgName: null, imgData: ''}],
            title: '',
            tagInput: '',
            tags: []
        }
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

    handleStepAdd = ( event ) => {
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

    handleSubmit = () => {
        const { category } = this.state;
        const options = {
            params: {
                category: category
            }
        }

        axios.get(`${API_HOST_URL}/api/dashboard/`, options)
            .then(response => {
                const { category, description, steps, tags, title } = this.state;
                
                const nextAvailableIndex = Object.keys(response.data).length

                const itemIdIncrement = nextAvailableIndex + 1

                const options = {
                    category: category,
                    categoryItemIndex: nextAvailableIndex,
                    description: description,
                    itemId: itemIdIncrement,
                    steps: steps,
                    tags: tags,
                    title: title
                }

                if (category !== 'choose a category') {
                    axios.post(`${API_HOST_URL}/api/dashboard/post-article`, options)
                    .then(response => {
                        alert(response.data)
                    })
                    .catch(error => {
                        console.log(error)
                    });
                } else {
                    alert('Please select a valid category.')
                }
            })
    }

    // can refactor each section of the form into it's own component?

    render() {
        const { category, description, steps, tagInput, tags, title } = this.state;
        const { adminAction, stepAction } = this.props; 

        return (
            <div className="form-wrapper">
                <form className="form-post-article">
                    <DashboardFormCategory 
                        handleChange={this.handleInputChange} 
                        category={category}
                        categoryList={this.props.categoryList} />
                    <DashboardFormTitle 
                        handleInputChange={this.handleInputChange} 
                        title={title} />
                    <DashboardFormDescription 
                        description={description} 
                        handleInputChange={this.handleInputChange} />
                    <DashboardFormTags 
                        handleInputChange={this.handleInputChange}
                        handleTagDelete={this.handleTagDelete}
                        handleTags={this.handleTags}
                        tagInput={tagInput}
                        tags={tags} />
                    <DashboardFormStepButtons 
                        adminAction={adminAction}
                        handleStepAdd={this.handleStepAdd}
                        stepAction={stepAction} />
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
                        <button type="button" className="form-button submit-button" onClick={this.handleSubmit}>
                        Submit
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default PostArticle;