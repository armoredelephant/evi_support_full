import React, { Component, Fragment } from 'react';
import axios from 'axios';

// this will be the actual componenet that is loaded after redirect to "Dashboard" after clearing AuthChecker
class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            adminView: 'article'
        }
    }

    componentDidMount() {
        this.setState({ adminView: this.state.adminView })
    }

    handleSectionChange= (section) => {
        this.setState({ adminView: section })
    }

    render() {
        const { adminView } = this.state;

        return (
            <Fragment>
                <header className="dashboard-header">
                    <nav className="dashboard-nav">
                        <button className={adminView === 'article' ? 'dashboard-button-active_article' : 'dashboard-button'} onClick={() => this.handleSectionChange('article')} >Articles</button>
                        <button className={adminView === 'video' ? 'dashboard-button-active_video' : 'dashboard-button'} onClick={() => this.handleSectionChange('video')} >Videos</button>
                    </nav>
                </header>
                <main role="main" className="#">
                    { adminView === 'article'
                    ?
                        <div>Placeholder {/** <PostArticle /> */}</div>
                    :
                        <div>Placeholder {/** <PostVideo /> */}</div>
                    }
                </main>
            </Fragment>
        );
    }
}

export default Dashboard;
// will need 2 inner components to be loaded from here that are wrapped

// PostArticle

// PostVideo