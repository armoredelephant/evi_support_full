import React, { Component } from 'react';

import { axiosGet } from '../Shared/AxiosFetch';
import axios from  'axios';
import EditArticle from './PostArticle/EditArticle';
import PostArticle from './PostArticle/PostArticle';

const API_HOST_URL = process.env.API_URL;

class ManageArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: 'choose a category',
            categoryList: []
        }
    }

    componentWillMount() {
        const options = {
            params: {
                requiresCategory: true
            }
        }

        axios.get(`${API_HOST_URL}/api/articles`, options).then(
            response =>  {
                const categoryList = response.data.categoryList
                this.setState({ categoryList: categoryList })
            }
        );
    }

    handleAction = (categoryList, action) => {
        switch(action) {
            case 'post':
            return <PostArticle adminAction={action} categoryList={categoryList} stepAction='Add Steps' />;
            case 'edit':
            return <EditArticle adminAction={action} category={this.state.category} categoryList={categoryList} stepAction='Add or Remove Steps'/>;
            case 'delete':
            return <PostArticle adminAction={action} categoryList={categoryList} />;
        }

    }
 
    render() {
        const { categoryList} = this.state;
        const { adminAction } = this.props;

        return ( this.handleAction(categoryList, adminAction) );
    }
}

export default ManageArticle;
