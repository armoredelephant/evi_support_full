import React from 'react';
import axios from 'axios';

import VideoSidebar from './VideoSidebar';

class ArticleActive extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeVideoLink: null,
            allVideosData: null,
            categoryNames: null,
            currentVideosList: null,
            currentVideoId: null
    }
}

    componentDidMount() {
        this.axiosFetchArticles();
    }

    handleCurrentCategory = () => {
        const activeVideoLink = null
        this.setState({ activeVideoLink })
    }

    axiosFetchArticles = () => {
        return axios.get('/resources/stubs/video_structure.json').then(response => {
            const allVideosData = response.data
            const categoryNames = Object.keys(response.data)
            const currentVideosList = response.data[this.props.match.params.category].videos
            const currentVideoId = response.data[this.props.match.params.category].videos.find(
                videos => {
                    return videos.id == this.props.match.params.videoId
                }
            )
            
            this.setState({ allVideosData, currentVideosList, currentVideoId, categoryNames });
        });
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.url !== this.props.match.url)  {
            const allVideosData = this.state.allVideosData
            const currentVideoId = allVideosData[this.props.match.params.category].videos.find(
                video => {
                    return video.id == this.props.match.params.videoId
                }
            )
            const activeVideoLink = currentVideoId.title
            const categoryNames = Object.keys(allVideoData)

            this.setState({ activeVideoLink, currentVideoId, categoryNames })
        }
    }

    render() {
        if (!this.state.categoryNames) {
            return null
        }

        const { 
                allVideosData, 
                activeVideoLink, 
                categoryNames, 
                currentVideosList, 
                currentVideoId, 
            } = this.state
        
        return (
            <div className="view-article-container">
                <VideoSidebar 
                    activeVideoLink={activeVideoLink}
                    allVideosData={allVideosData}
                    categoryNames={categoryNames}
                    handleCurrentCategory={this.handleCurrentCategory}
                    videoList={currentVideosList}
                    videoId={currentVideoId}
                />

                {/* <ActualVideo 
                    articleId={currentArticleId}
                    articleIdMatch={this.props.match.params.articleId}
                    backdropClick={this.backdropClickHandler}
                    click={this.changeDisplayImage}
                    currentCategory={this.props.match.params.category}
                    currentStepId={currentStepId}
                    displayImage={displayImage}
                    key={currentArticleId.title}
                /> */}
            </div>

        )
    }
}

export default ArticleActive;
