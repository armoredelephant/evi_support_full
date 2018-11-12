import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import ApplicationsCategory from './categories/ApplicationsCategory'

class ArticleSidebar extends Component {
    constructor() {
        super()
        this.state = {
            categoryList: null
        }
    }

    componentDidMount() {
        axios.get('/resources/stubs/article_structure.json').then( response => {
            this.setState(
                {
                    categoryList: response.data
                }
            )
        });
    }

    render() {
        if(!this.state.categoryList) {
            return null
        }
        const { categoryList } = this.state
        
        return (
            <aside className="article-sidebar">
                <ApplicationsCategory />
            </aside>
        );
    }
}

export default ArticleSidebar