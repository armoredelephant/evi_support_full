import React, { Fragment } from 'react';

import ActualArticle from './ActualArticle';
import { axiosGet } from '../Shared/AxiosFetch';
import Footer from '../StaticFooter';
import Header from '../StaticHeader';
import Sidebar from '../Sidebar/Sidebar';


class ArticleActive extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeItemLink: null,
            allData: null,
            currentStepId: null,
            displayModal: false
        }
    }

    componentDidMount() {
        axiosGet('/resources/stubs/article_structure.json').then(
            response => this.setState({
                allData: response
            })
        );
    };

    changeDisplayImage = ( event, value ) => {
        const currentStepId = value
        this.setState(prevState => ({
            displayModal: !prevState.displayModal,
            currentStepId: currentStepId
        }));
    };

    hideModal = () => {
        this.setState({
            displayModal: false
        });
    };

    render() {
        if (!this.state.allData) {
            return null;
        };

        const { 
                allData, 
                currentStepId, 
                displayModal
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
            <Fragment>
                <Header />
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
                        hideModal={this.hideModal}
                        click={this.changeDisplayImage}
                        currentCategory={this.props.match.params.category}
                        currentStepId={currentStepId}
                        displayModal={displayModal}
                    />
                </div>
                <Footer />
            </Fragment>
        );
    };
};

export default ArticleActive;

