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

    handleImage = ( event, files ) => {
        const target = event.target
        const { updsatedSteps } = this.state;

        let oldSteps = Array.from(updatedSteps);
        oldSteps[target.name].imgName = files[0].name
        oldSteps[target.name].imgData = files[0] 
        
        const newSteps = oldSteps

        this.setState({
            updatedSteps: newSteps
        })
    }

    handleInputChange = ( event ) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        
        this.setState({
            selectedArticle: { [name]: value }
        });

    }

    handleStepAdd = ( event ) => {
        event.preventDefault();
        const { updatedSteps } = this.state
        const arrayOfSteps = Array.from(updatedSteps)
        const nextStep = { step: '', imgName: null, imgData: '' }
        const newSteps = [...arrayOfSteps, nextStep];

        this.setState({
            updatedSteps: newSteps
        })
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

        this.setState({
            updatedTagsList: newTagArray
        })

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

        this.setState({
            tagInput: '',
            updatedTagsList: newTagsArray
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
                                handleImage={this.handleImage}
                                handleStepInput={this.handleStepInput}
                                steps={updatedSteps} />
                            : null
                            }
                        </Fragment>
                        : null }
                    </Fragment>
                </form>
            </div>
        )
    }
}

export default EditArticle;