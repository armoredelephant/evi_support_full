import React, { Component, Fragment } from 'react';

import DashboardFormCategory from './DashboardFormCategory';
import DashboardFormDescription from './DashboardFormDescription';
import DashboardFormSteps from './DashboardFormSteps';
import DashboardFormTitle from './DashboardFormTitle';
import Tags from './Tags';
import axios from 'axios';
import DashboardFormArticleList from './DashboardFormArticleList';

const API_HOST_URL = process.env.API_URL;

class EditArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articleList: [],
            category: 'choose a category',
            selectedArticle: {},
            title: 'choose an article',
            titleList: []
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
                        selectedArticle: response.data.article // [0] if routing the whole article
                    })
                })
        }
        this.setState({ title: target.value })
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

    render() {
        const { category, title, titleList } = this.state;

        return (
            <div className="form-wrapper">
                <form className="form-post-article">
                    <DashboardFormCategory 
                        category={category}
                        categoryList={this.props.categoryList}
                        handleChange={this.handleCategory} />
                        {/** need a component that is a dropdown to select article. Prop to pass down will be articleList */}
                        {/* <Fragment>{
                            titleList !== null 
                            ?
                                <DashboardFormArticleList
                                    handleChange={this.handleArticle}
                                    title={title}
                                    titleList={titleList} />
                            :
                                null
                        }     
                        </Fragment>    */}
                    <DashboardFormArticleList
                                handleChange={this.handleArticle}
                                title={title}
                                titleList={titleList} />
                    <DashboardFormTitle
                        handleInputChange={this.handleInputChange}
                        title={this.state} />
                </form>
            </div>
        )
    }
}

export default EditArticle;