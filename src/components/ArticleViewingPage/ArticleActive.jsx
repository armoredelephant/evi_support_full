import React from 'react';

import ActualArticle from './ActualArticle';
import { axiosGet } from '../Shared/AxiosFetch';
import axios from 'axios';
import Sidebar from '../Sidebar/Sidebar';

const API_HOST_URL = process.env.API_URL;

class ArticleActive extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeItemLink: null,
            allData: null,
            currentStepIndex: 0,
            displayModal: false,
            imgURL: ''
        }
    }

    componentDidMount() {
        const API_HOST_URL = process.env.API_URL;

        axiosGet(`${API_HOST_URL}/api/articles`).then(
            response => this.setState({
                allData: response
            })
        );
    };

    changeDisplayImage = ( event, value ) => {
        const currentStep = value

        const { allData, currentStepIndex } = this.state

        const currentItemList = allData[this.props.match.params.category].categoryItems,
             currentItemId = currentItemList.find(
            item => {             
                return item.id == this.props.match.params.itemId;
            }
        );
            // needs uniqueId and imgName
        const stepArray = currentItemId.body,
            imgName = stepArray[currentStep].imgName,
            uniqueId = currentItemId.uniqueId 

        const options = {
            params: {
                imgName: imgName,
                imgIndex: currentStep,
                uniqueId: uniqueId
            }
        }

        axios.get(`${API_HOST_URL}/api/articles/fetch-image`, options).then(response => {
            const prevDisplayModal = this.state.displayModal
            this.setState(() => ({
                imgURL: response.data.downloadURL,
                displayModal: !prevDisplayModal,
                currentStepIndex: currentStep
            }));
        })
    };

    hideModal = () => {
        this.setState({
            displayModal: false,
            imgUrl: ''
        });
    };

    render() {
        if (!this.state.allData) {
            return null;
        };

        const { 
                allData, 
                currentStepIndex, 
                displayModal,
                imgURL
            } = this.state

        const categoryNames = Object.keys(allData);
        const currentItemList = allData[this.props.match.params.category].categoryItems;
        const currentItemId = currentItemList.find(
            item => {             
                return item.id == this.props.match.params.itemId;
            }
        );

        const activeItemLink = currentItemId.title;
        const sitePage = "Articles";
        
        return (
            <div className="view-article-container">
                <Sidebar 
                    activeItemLink={activeItemLink}
                    allData={allData}
                    currentItemList={currentItemList} 
                    currentItemId={currentItemId}
                    categoryNames={categoryNames}
                    handleCurrentCategory={this.handleCurrentCategory}
                    sitePage={sitePage}
                />

                <ActualArticle 
                    currentItemId={currentItemId}
                    itemIdMatch={this.props.match.params.itemId}
                    imgURL={imgURL}
                    hideModal={this.hideModal}
                    click={this.changeDisplayImage}
                    currentCategory={this.props.match.params.category}
                    currentStepIndex={currentStepIndex}
                    displayModal={displayModal}
                />
            </div>
        );
    };
};

export default ArticleActive;

