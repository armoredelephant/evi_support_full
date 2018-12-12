import React, { Component, Fragment } from 'react';

import PostArticle from './PostArticle';

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            adminView: 'article',
            selectedAction: 'post', 
            isAdmin: true // this will actually get passed down by context within the authckecker app. This is only for testing offline.
        }
    }

    componentDidMount() {
        this.setState({ adminView: this.state.adminView });
    }

    handleSectionChange = ( section ) => {
        this.setState({ adminView: section });
    }

    handleSelectedAction = ( selected ) => {
        this.setState({ selectedAction: selected });
    }

    render() {
        const { adminView, isAdmin, selectedAction } = this.state;

        return (
            <Fragment>
                <header className="dashboard-header">
                    <nav className="dashboard-nav">
                        <div className="dashboard-header-div">
                            <a href="/" className="dashboard-header-link">home</a>
                            <button className="dashboard-logout-button">logout</button>
                        </div>
                        <div className="dashboard-button-wrapper">
                            <button 
                                className={adminView === 'article' ? 'dashboard-button-active_article' : 'dashboard-button'} 
                                onClick={() => this.handleSectionChange('article')} >
                            articles
                            </button>
                            <button 
                                className={adminView === 'video' ? 'dashboard-button-active_video' : 'dashboard-button'} 
                                onClick={() => this.handleSectionChange('video')} >
                            videos
                            </button>
                        </div>
                    </nav>
                </header>
                <main role="main" className="dashboard-main" id="dashboard-main">
                    <div className="dashboard-main-wrapper">
                        <div className="dashboard-main-header">
                            <button 
                                className={selectedAction === 'post' ? 'dashboard-main-header-button_active' : 'dashboard-main-header-button'}
                                onClick={() => this.handleSelectedAction('post')}>
                            post
                            </button>
                            {isAdmin 
                            ? 
                                <Fragment>
                                    <button 
                                        className={selectedAction === 'edit' ? 'dashboard-main-header-button_active' : 'dashboard-main-header-button'}
                                        onClick={() => this.handleSelectedAction('edit')}>
                                    edit
                                    </button>
                                    <button 
                                        className={selectedAction === 'delete' ? 'dashboard-main-header-button_active' : 'dashboard-main-header-button'}
                                        onClick={() => this.handleSelectedAction('delete')}>
                                    delete
                                    </button>
                                </Fragment>
                            :   
                                null
                            }
                        </div>
                        { adminView === 'article'
                        ?
                            <div>
                                <PostArticle />
                            </div>
                        :
                            <div>{/** <PostVideo /> */}</div>
                        }
                    </div>
                </main>
                <footer>

                </footer>
            </Fragment>
        );
    }
}

export default Dashboard;
// will need 2 inner components to be loaded from here that are wrapped

// PostArticle

// PostVideo