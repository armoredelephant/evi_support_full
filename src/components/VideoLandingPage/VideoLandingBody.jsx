import React, { Component } from 'react';
import axios from 'axios';

import ItemList from '../Shared/ItemList';

class VideoLandingBody extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            categoryList: null
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3000/').then( response => {
            this.setState(
                {
                    isLoading: false,
                    categoryList: response.data
                }
            )
        });
    }

    render() {
        const { categoryList, isLoading } = this.state
        const sitePage = 'Videos';
        if (isLoading) {
            return null
        }

        return (
            <main role="main" className="video-landing-main">
                <ItemList categoryList={categoryList} sitePage={sitePage} />
            </main>
        );
    }
}

export default VideoLandingBody;