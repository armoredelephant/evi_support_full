import React, { Component, Fragment } from 'react';

import DashboardFormCategory from './DashboardFormCategory';
import DashboardFormDescription from './DashboardFormDescription';
import DashboardFormStepButtons from './DashboardFormStepButtons';
import DashboardFormSteps from './DashboardFormSteps';
import DashboardFormTags from './DashboardFormTags';
import DashboardFormTitle from './DashboardFormTitle';
import Tags from './Tags';
import axios from 'axios';
import DashboardFormArticleList from './DashboardFormArticleList';

const API_HOST_URL = process.env.API_URL;

class EditArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articleIndex: 0,
            articleChosen: false,
            articleList: [],
            category: 'choose a category',
            description: '',
            selectedArticle: {
                title: '',
                description: '',
                id: null,
                tags: [],
                body: []
            },
            updatedSteps: [],
            tagInput: '',
            title: 'choose an article',
            titleList: [],
            updatedTagsList: []
        }
    }

    handleArticle = ( event ) => {
        const target = event.target
        const { category } = this.state;

        if (target.value !== 'choose an article') {
            const options = {
                params: {
                    articleTitle: target.value,
                    category: category
                }
            }

            axios.get(`${API_HOST_URL}/api/articles/single-article`, options)
                .then(response => {
                    this.setState({
                        articleIndex: response.data.articleIndex,
                        selectedArticle: response.data.article,
                        updatedTagsList: response.data.article.tags,
                        updatedSteps: response.data.article.body // [0] if routing the whole article
                    })
                })
        }
        this.setState({ title: target.value, articleChosen: true })
    }

    // can refactor handleArticle and handleCategory to accept [name] and make it universal. Would have to figure out the back end portion

    handleCategory = ( event ) => {
        const target = event.target;
        
        if (target.value !== 'choose a category') {
            const options = {
                params: {
                    category: target.value
                }
            }

            axios.get(`${API_HOST_URL}/api/dashboard/article-titles`, options)
            .then(response => {
                this.setState({
                    titleList: response.data.titles
                })
            })
        }

        this.setState({ category: target.value })
    }

    handleImage = ( event ) => {
        const target = event.target
        const files = target.files
        const { updatedSteps } = this.state;

        let oldSteps = Array.from(updatedSteps);
        oldSteps[target.name].imgName = files[0].name
        oldSteps[target.name].stepIndex = target.name
        oldSteps[target.name].file = files[0]

        const newSteps = oldSteps

        this.setState({
            updatedSteps: newSteps
        });
    }

    handleInputChange = ( event ) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        const oldState = this.state.selectedArticle
        oldState[name] = value
        
        this.setState({
            selectedArticle: oldState
        });

    }

    handleStepAdd = ( event ) => {
        event.preventDefault();
        const { updatedSteps, selectedArticle } = this.state
        const arrayOfSteps = Array.from(updatedSteps)
        const nextStep = { step: '', imgName: null, imgData: '', file: null }
        const newSteps = [...arrayOfSteps, nextStep];

        const oldState = selectedArticle
        oldState.body = newSteps

        this.setState({
            selectedArticle: oldState,
            updatedSteps: newSteps
        })
    }

    handleStepDelete = ( event ) => {
        event.preventDefault();
        const target = event.target;
        const indexToDelete = Number(target.name.split('-')[1]);
        const { updatedSteps, selectedArticle } = this.state
        const arrayOfSteps = selectedArticle.body
        console.log(arrayOfSteps)
        if (arrayOfSteps.length === 1) {
            const newSteps = [{ step: '', imgName: null, imgData: '', file: null }]
            const oldState = selectedArticle
            oldState.body = newSteps

            this.setState({
                selectedArticle: oldState,
                updatedSteps: newSteps
            })
        } else {
            const newSteps = arrayOfSteps
            newSteps.splice(indexToDelete, 1)

            const oldState = selectedArticle;
            oldState.body = newSteps

            this.setState({
                selectedArticle: oldState,
                updatedSteps: newSteps
            })
        }
        // const filteredSteps = arrayOfSteps.splice(indexToDelete, 1)
        // console.log(filteredSteps)

        // const oldState = selectedArticle
        // oldState.body = filteredSteps

        // this.setState({
        //     selectedArticle: oldState,
        //     updatedSteps: filteredSteps
        // })
    }

    handleStepInput = ( event ) => {
        const target = event.target;
        const value = target.value;
        const { updatedSteps } = this.state;

        let oldSteps = Array.from(updatedSteps);

        oldSteps[target.name].step = value;

        const newSteps = oldSteps;

        this.setState({
            updatedSteps: newSteps
        })
    }

    handleTagDelete = ( event ) => {
        event.preventDefault();
        const target = event.target
        const { updatedTagsList } = this.state
        const newTagArray = updatedTagsList.filter(tag => { return tag !== target.value })

        const oldState = this.state.selectedArticle
        oldState.tags = newTagArray
        
        this.setState({
            selectedArticle: oldState,
            updatedTagsList: newTagArray
        });
    }

    handleTagInput = ( event ) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleTags = ( e ) => {
        e.preventDefault();
        const { updatedTagsList, tagInput } = this.state;
        const prevTagsArray = updatedTagsList;
        const lowerCaseTags = tagInput.toLowerCase()
        const splitTags = lowerCaseTags.split(/[';']/g)
            .map(tag => tag.trim() )
            .filter(tag => tag !== '' );

        for (let tag of splitTags) {
            if (prevTagsArray.includes(tag)) return alert('One or more tags are already added. Please remove duplicate tags.')
        }

        const newTagsArray = prevTagsArray.concat(splitTags)

        const oldState = this.state.selectedArticle
        oldState.tags = newTagsArray
        
        this.setState({
            tagInput: '',
            selectedArticle: oldState,
            updatedTagsList: newTagsArray
        });
    }

    // need to update the options to post. Updated article is stored in selectedArticle here. Or remake how the title/description is stored.
    // steps will need to be renamed to selectedArticle.steps.map()
    // Can remove the axios.get altogether as we already have the article
    // Index that the article is to be "set" at is in this.state.articleIndex
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
                    this.setState({ isPosting: true }, () =>{
                        axios.post(`${API_HOST_URL}/api/dashboard/post-article`, options)
                        .then(response => {
                            steps.map(step => {
                                if (step.file !== null) {
                                    const data = new FormData();
                                    data.append('file', step.file, step.file.name)
                                    data.append('title', title)
                                    data.append('index', step.stepIndex)
                            
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
                                    axios(options)
                                }
                                if (response.data.message === 'success') {
                                    this.setState({
                                        category: 'choose a category',
                                        description: '',
                                        isPosting: false, 
                                        postMessage: 'Article has successfully posted!',
                                        steps: [{step: '', imgName: null, stepIndex: '', file: null}],
                                        title: '',
                                        tagInput: '',
                                        tags: [],
                                        uploadComplete: true
                                    }) 
                                }
                            })
                        })
                        .catch(error => {
                            console.log(error)
                        });
                    })
                } else {
                    alert('Please select a valid category.')
                }
            })
    }

    // Can be refactored to have switch statements to determine which props get passed down.
    render() {
        const { articleChosen, category, selectedArticle, tagInput, title, titleList, updatedSteps, updatedTagsList } = this.state;
        const { adminAction, stepAction } = this.props;

        return (
            <div className="form-wrapper">
                <form className="form-post-article">
                    <DashboardFormCategory 
                        category={category}
                        categoryList={this.props.categoryList}
                        handleChange={this.handleCategory} />
                    <DashboardFormArticleList
                                handleChange={this.handleArticle}
                                title={title}
                                titleList={titleList} />
                    <Fragment>
                        {articleChosen
                        ?
                        <Fragment>
                            <DashboardFormTitle
                                handleInputChange={this.handleInputChange}
                                title={selectedArticle.title} />
                            <DashboardFormDescription
                                description={selectedArticle.description}
                                handleInputChange={this.handleInputChange} />
                            <DashboardFormTags
                                handleTagDelete={this.handleTagDelete}
                                handleTags={this.handleTags}
                                handleInputChange={this.handleTagInput}
                                tagInput={tagInput}
                                tags={updatedTagsList} />
                                {/** need a component to generate the steps. Will have an Add AND Subtract stepp button.
                                    Imaged will need to be loaded with the step. May need to ensure image is working. */}
                            <DashboardFormStepButtons 
                                adminAction={adminAction}
                                handleStepAdd={this.handleStepAdd}
                                stepAction={stepAction} />
                            {selectedArticle.body.length !== 0 
                            ? <DashboardFormSteps  
                                adminAction={adminAction}
                                handleImage={this.handleImage}
                                handleStepDelete={this.handleStepDelete}
                                handleStepInput={this.handleStepInput}
                                handleStepAdd={this.handleStepAdd}
                                steps={updatedSteps} />
                            : null
                            }
                             <div className="submit-wrapper">
                                <button type="button" className="form-button submit-button" onClick={this.handleSubmit}>
                                Submit
                                </button>
                            </div>
                            <div className="post-message">
                            {this.state.postMessage}
                            </div>
                        </Fragment>
                        : null }
                    </Fragment>
                </form>
            </div>
        )
    }
}

export default EditArticle;