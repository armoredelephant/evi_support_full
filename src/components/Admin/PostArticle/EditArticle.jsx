import React, { Component } from 'react';

import DashboardFormCategory from './DashboardFormCategory';
import DashboardFormDescription from './DashboardFormDescription';
import DashboardFormSteps from './DashboardFormSteps';
import DashboardFormTitle from './DashboardFormTitle';
import Tags from './Tags';
import axios from 'axios';

const API_HOST_URL = process.env.API_URL;

class EditArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articleList: null,
            category: 'choose a category'
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

    handleCategory = ( event ) => {
        const target = event.target;
        
        if ( target.value !== 'choose a category') {
            const options = {
                params: {
                    category: target.value
                }
            }

            axios.get(`${API_HOST_URL}/api/dashboard/edit-article`, options)
            .then(response => {
                this.setState({
                    articleList: response.data
                })
            })
        }

        this.setState({ category: target.value })
    }

    render() {

        const { category } = this.state;

        return (
            <div className="form-wrapper">
                <form className="form-post-article">
                    <DashboardFormCategory 
                        handleChange={this.handleCategory}
                        category={category}
                        categoryList={this.props.categoryList} />
                </form>
            </div>
        )
    }
}

export default EditArticle;