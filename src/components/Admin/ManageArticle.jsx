import React, { Component } from 'react';

import { axiosGet } from '../Shared/AxiosFetch';
import PostArticle from './PostArticle/PostArticle';

const API_HOST_URL = process.env.API_URL;

class ManageArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allData: ''
        }
    }

    componentWillMount() {
        const { allData } = this.state;

        axiosGet(`${API_HOST_URL}/api/articles`).then(
            response => this.setState({
                allData: response
            })
        );
    }

    handleAction = (articleData, action) => {
        const categoryList = Object.keys(articleData);

        switch(action) {
            case 'post':
            return <PostArticle categoryList={categoryList} />;
            case 'edit':
            return <PostArticle categoryList={categoryList} />;
            case 'delete':
            return <PostArticle categoryList={categoryList} />;
        }

    }
 
    render() {
        const { allData } = this.state;
        const { adminAction } = this.props;

        return ( this.handleAction(allData, adminAction) );
    }
}

export default ManageArticle;
