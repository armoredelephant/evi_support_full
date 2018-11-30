import React from 'react';
import axios from 'axios';

import Sidebar from '../Sidebar/Sidebar';

class VideoActive extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeItemLink: null,
            allData: null,
            categoryNames: null,
            currentItemList: null,
            currentItemId: null
    }
}

    componentDidMount() {
        this.axiosFetchCategoryData();
    }

    handleCurrentCategory = () => {
        const activeItemLink = null
        this.setState({ activeItemLink })
    }

    axiosFetchCategoryData = () => {
        const API_HOST_URL = process.env.API_URL;

        return axios.get(`${API_HOST_URL}/api/videos`).then(response => {
            const allData = response.data
            const categoryNames = Object.keys(response.data)
            const currentItemList = response.data[this.props.match.params.category].categoryItems
            const currentItemId = response.data[this.props.match.params.category].categoryItems.find(
                item => {
                    return item.id == this.props.match.params.itemId
                }
            )
            
            this.setState({ allData, currentItemList, currentItemId, categoryNames });
        });
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.url !== this.props.match.url)  {
            const allData = this.state.allData
            const currentItemId = allItemData[this.props.match.params.category].categoryItems.find(
                item => {
                    return item.id == this.props.match.params.itemId
                }
            )
            const activeItemLink = currentItemId.title
            const categoryNames = Object.keys(allData)

            this.setState({ activeItemLink, currentItemId, categoryNames })
        }
    }

    render() {
        if (!this.state.categoryNames) {
            return null
        }

        const { 
                allData, 
                activeItemLink, 
                categoryNames, 
                currentItemList, 
                currentItemId, 
            } = this.state

        const sitePage = 'Videos';
        
        return (
            <div className="view-article-container">
                <Sidebar 
                    activeItemLink={activeItemLink}
                    allData={allData}
                    categoryNames={categoryNames}
                    handleCurrentCategory={this.handleCurrentCategory}
                    currentItemList={currentItemList}
                    currentItemId={currentItemId}
                />
            </div>
        )
    }
}

export default VideoActive;
