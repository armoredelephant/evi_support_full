import React from 'react';
import axios from 'axios';

import Sidebar from '../Sidebar/Sidebar';
import ActualArticle from './ActualArticle';

class ArticleActive extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeItemLink: null,
            allData: null,
            categoryNames: null,
            currentItemList: null,
            currentItemId: null,
            currentStepId: null,
            displayImage: false
    }
}

    componentDidMount() {
        this.axiosFetchCategoryData();
    }

    changeDisplayImage = ( event, value ) => {
        const currentStepId = value
        this.setState(prevState => ({
            displayImage: !prevState.displayImage,
            currentStepId: currentStepId
        }));
    }

    backdropClickHandler = () => {
        this.setState({
            displayImage: false
        });
    }

    handleCurrentCategory = () => {
        const activeItemLink = null
        this.setState({ activeItemLink })
    }

    axiosFetchCategoryData = () => {
        // can prob be refactored further to be conditional get on video or article depending on sitePage
        return axios.get('/resources/stubs/article_structure.json').then(response => {
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
            const currentItemId = allData[this.props.match.params.category].categoryItems.find(
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
                currentStepId, 
                displayImage 
            } = this.state

        const sitePage = "Articles";
        console.log(this.props.match.params.itemId)
        
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
                    displayImage={displayImage}
                    key={currentItemId.title}
                />
            </div>

        )
    }
}

export default ArticleActive;

/* 
    State can be set here for all child components as currentArticle and button as showArticles

    Sidebar:
        - Category as button
            - Button needs click handler who's event needs to be passed down
            - Click handler can be created here and passed down as a function
        - Article title as li>Link

    Artcile: 
        - Needs to receive props for article
*/
