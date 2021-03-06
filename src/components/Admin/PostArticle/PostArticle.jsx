import React, { Component } from 'react';

import DashboardFormCategory from './DashboardFormCategory';
import DashboardFormDescription from './DashboardFormDescription';
import DashboardFormStepButtons from './DashboardFormStepButtons';
import DashboardFormSteps from './DashboardFormSteps';
import DashboardFormTags from './DashboardFormTags';
import DashboardFormTitle from './DashboardFormTitle';
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
            imagesToUploadCount: 0,
            isPosting: false,
            postMessage: '',
            steps: [{step: '', imgName: null, imgIndex: '', file: null}],
            title: '',
            tagInput: '',
            tags: [],
            uploadComplete: false
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
        const nextStep = { step: '', imgName: null, imgIndex: '', file: null }
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

    handleImage = ( event ) => {
        const target = event.target
        const files = target.files
        const { imagesToUploadCount, steps } = this.state;

        let oldSteps = Array.from(steps);
        oldSteps[target.name].imgName = files[0].name
        oldSteps[target.name].imgIndex = target.name
        oldSteps[target.name].file = files[0]
        oldSteps[target.name].needToPost = true

        const newImagesToUploadCount = imagesToUploadCount + 1

        const newSteps = oldSteps

        this.setState({
            steps: newSteps,
            imagesToUploadCount: newImagesToUploadCount
        });
    }

    handleSubmit = () => {
        const { category } = this.state;
        const options = {
            params: {
                category: category,
                needsUniqueId: true
            }
        }
    // the uniqueID needs to be gvien sooner, possibly in this call, that way the image and article can both us it.
        axios.get(`${API_HOST_URL}/api/dashboard`, options)
            .then(response => {
                const { category, description, imagesToUploadCount, steps, tags, title } = this.state;
    
                const nextAvailableIndex = response.data.nextIndex
    
                const itemIdIncrement = nextAvailableIndex + 1
                const uniqueId = response.data.uniqueId 

                if (category !== 'choose a category') {
                    if (imagesToUploadCount === 0) {
                        const options = {
                            category: category,
                            categoryItemIndex: nextAvailableIndex,
                            description: description,
                            itemId: itemIdIncrement,
                            steps: steps,
                            tags: tags,
                            title: title,
                            uniqueId: uniqueId
                        }

                        axios.post(`${API_HOST_URL}/api/dashboard/post-article`, options)
                        .then(response => {
                            if (response.data.message === 'success') {
                                this.setState({
                                    category: 'choose a category',
                                    description: '',
                                    isPosting: false, 
                                    postMessage: 'Article has successfully posted!',
                                    steps: [{step: '', imgName: null, imgIndex: '', file: null}],
                                    title: '',
                                    tagInput: '',
                                    tags: [],
                                    uploadComplete: true
                                })
                            } else { return }
                        }) 
                        .catch(error => {
                            console.log(error)
                        })
                    } else {
                        steps.map((step, index) => {
                            if (step.needToPost) {
                                const data = new FormData();
                                data.append('file', step.file, step.file.name)
                                data.append('title', title)
                                data.append('index', step.imgIndex)
                                data.append('uniqueId', uniqueId)
        
                                const options = {
                                    data,
                                    method: 'POST',
                                    config: {
                                        headers: {
                                            'Content-Type': 'multipart/form-data'
                                        }
                                    },
                                    url: `${API_HOST_URL}/api/dashboard/post-image`
                                }
                                axios(options).then(response => {
                                    const { imagesToUploadCount } = this.state
                                    const count = imagesToUploadCount 
                                    const prevSteps = steps
                                    const tempImagesToUploadCount = count - 1
                                    prevSteps[index].needToPost = false
                                    this.setState({ imagesToUploadCount: tempImagesToUploadCount, steps: prevSteps }, () => {
                                        if (tempImagesToUploadCount === 0) {
                                            const options = {
                                                category: category,
                                                categoryItemIndex: nextAvailableIndex,
                                                description: description,
                                                itemId: itemIdIncrement,
                                                steps: steps,
                                                tags: tags,
                                                title: title,
                                                uniqueId: uniqueId
                                            }
    
                                            axios.post(`${API_HOST_URL}/api/dashboard/post-article`, options)
                                            .then(response => {
                                                if (response.data.message === 'success') {
                                                    this.setState({
                                                        category: 'choose a category',
                                                        description: '',
                                                        isPosting: false, 
                                                        postMessage: 'Article has successfully posted!',
                                                        steps: [{step: '', imgName: null, imgIndex: '', file: null}],
                                                        title: '',
                                                        tagInput: '',
                                                        tags: [],
                                                        uploadComplete: true
                                                    })
                                                } else { return }
                                            }) 
                                            .catch(error => {
                                                console.log(error)
                                            })
                                        }
                                    })
                                })
                            }
                        })
                    }
                } else {
                    alert('Please select a valid category.')
                }
            })
    }

    // can refactor each section of the form into it's own component?

    render() {
        const { category, description, isLoading, steps, tagInput, tags, title, uploadComplete } = this.state;
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
                            isLoading={isLoading}
                            steps={steps}
                            uploadComplete={uploadComplete} />
                    :
                        ''
                    }
                    <div className="submit-wrapper">
                        <button type="button" className="form-button submit-button" onClick={this.handleSubmit}>
                        Submit
                        </button>
                    </div>
                    <div className="post-message">
                    {this.state.postMessage}
                    </div>
                </form>
            </div>
        );
    }
}

export default PostArticle;