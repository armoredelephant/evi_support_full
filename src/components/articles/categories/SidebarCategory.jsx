import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

import SidebarList from './SidebarList'

class SidebarCategory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sidebarCategory: null,
            showArticles: false
        }

        this.toggleArticleList = this.toggleArticleList.bind(this)
    }

    componentDidMount() {
        axios.get('/resources/stubs/article_structure.json').then(response => {
            this.setState(
                {
                    sidebarCategory: response.data[this.props.categoryName].articles
                }
            )
        })
    }

    toggleArticleList() {
        this.setState(state => ({
            showArticles: !state.showArticles
        }))
    }

    // Below class field syntax will not require the binding in the constructor
    
    // toggleArticleList = () => {
    //     this.setState(state => ({
    //         showArticles: !state.showArticles
    //     }))
    // }

    render() {
        if (!this.state.sidebarCategory) {
            return null
        }

        const { sidebarCategory } = this.state 

        return (
            <ul>
                <button onClick={this.toggleArticleList}>{this.props.categoryName}</button>
                <SidebarList sideBarCategory={sidebarCategory} showArticles={showArticles} categoryName={this.props.categoryName}/>
            </ul>
        );
    }
}

export default SidebarCategory