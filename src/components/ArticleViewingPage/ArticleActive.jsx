import React from 'react';

import Sidebar from '../Sidebar/Sidebar';
import ActualArticle from './ActualArticle';
import { axiosGet } from '../Shared/AxiosFetch'

class ArticleActive extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeItemLink: null,
            allData: null,
            currentStepId: null,
            displayBackdrop: false
        }
    }

    componentDidMount() {
        axiosGet('/resources/stubs/article_structure.json').then(
            response => this.setState({
                allData: response
            })
        )
    }

    changeDisplayImage = ( event, value ) => {
        const currentStepId = value
        this.setState(prevState => ({
            displayBackdrop: !prevState.displayBackdrop,
            currentStepId: currentStepId
        }));
    }

    backdropClickHandler = () => {
        this.setState({
            displayBackdrop: false
        });
    }

    render() {
        if (!this.state.allData) {
            return null
        }

        const { 
                allData, 
                currentStepId, 
                displayBackdrop 
            } = this.state

        const categoryNames = Object.keys(allData)
        const currentItemList = allData[this.props.match.params.category].categoryItems
        const currentItemId = currentItemList.find(
            item => {             
                return item.id == this.props.match.params.itemId
            }
        );

        const activeItemLink = currentItemId.title
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
                    backdropClick={this.backdropClickHandler}
                    click={this.changeDisplayImage}
                    currentCategory={this.props.match.params.category}
                    currentStepId={currentStepId}
                    displayBackdrop={displayBackdrop}
                />
            </div>

        )
    }
}

export default ArticleActive;

