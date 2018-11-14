import React, { Component } from 'react';
import axios from 'axios';

import SidebarCategory from './SidebarCategory'

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
                <SidebarCategory categoryName="Applications"/>
                <SidebarCategory categoryName="Hardware Setup" />
                <SidebarCategory categoryName="Hardware Use" />
                <SidebarCategory categoryName="Email" />
                <SidebarCategory categoryName="Other" />
            </aside>
        );
    }
}

export default ArticleSidebar