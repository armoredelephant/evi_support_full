import React, { Component, Fragment } from 'react';

import DashboardFormCategory from './DashboardFormCategory';
import DashboardFormDescription from './DashboardFormDescription';
import DashboardFormSteps from './DashboardFormSteps';
import DashboardFormTags from './DashboardFormTags';
import DashboardFormTitle from './DashboardFormTitle';
import Tags from './Tags';
import axios from 'axios';
import DashboardFormArticleList from './DashboardFormArticleList';
import { of } from 'rxjs';

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
            tagInput: '',
            updatedTagsList: [],
            title: 'choose an article',
            titleList: []
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
                        updatedTagsList: response.data.article.tags // [0] if routing the whole article
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

    handleInputChange = ( event ) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        
        this.setState({
            selectedArticle: { [name]: value }
        });

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

    render() {
        const { articleChosen, category, selectedArticle, tagInput, title, titleList, updatedTagsList } = this.state;

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
                        </Fragment>
                        : null }
                    </Fragment>
                </form>
            </div>
        )
    }
}

export default EditArticle;