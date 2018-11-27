import React, { Component, Fragment } from 'react';
import axios from 'axios';

import Footer from '../StaticFooter';
import Header from '../StaticHeader';
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
        const sitePage = 'Videos';
        if (isLoading) {
            return null
        }

        return (
            <Fragment>
                <Header />
                <main role="main" className="video-landing-main">
                    <ItemList categoryList={categoryList} sitePage={sitePage} />
                </main>
                <Footer />
            </Fragment>
        );
    }
}

export default VideoLandingBody;