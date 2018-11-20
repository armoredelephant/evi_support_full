import React, { Component } from 'react';
import axios from 'axios';

import VideoList from './VideoList';

class VideoLandingBody extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            categoryList: null
        }
    }

    componentDidMount() {
        axios.get('/resources/stubs/video_structure.json').then( response => {
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

        if (isLoading) {
            return null
        }

        return (
            <main role="main" className="article-landing-main">
                <VideoList categoryList={categoryList} />
            </main>
        );
    }
}

export default VideoLandingBody;