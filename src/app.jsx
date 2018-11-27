import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './sass/base.scss'

import AdminPortal from './components/Admin/AdminPortal.jsx';
import ArticlesLandingBody from './components//ArticleLandingPage/ArticlesLandingBody';
import ArticleActive from './components/ArticleViewingPage/ArticleActive';
import Footer from './components/StaticFooter';
import Header from './components/StaticHeader';
import HomeBody from './components/HomeLandingPage/HomeBody';
import VideoActive from './components/VideoViewingPage/VideoActive';
import VideoLandingBody from './components/VideoLandingPage/VideoLandingBody';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    {window.location.pathname.includes('/AdminPortal') ? 
                        <Route exact path="/AdminPortal" component={AdminPortal} />
                    : (
                        <Fragment>
                            <Header />
                            <Route exact path="/" component={HomeBody} />
                            <Route exact path="/Articles" component={ArticlesLandingBody} />
                            <Route path="/Articles/:category/:itemId" component={ArticleActive} />
                            <Route exact path="/Videos" component={VideoLandingBody} />
                            <Route path="/Videos/:category/:itemId" component={VideoActive} />
                            <Footer />
                        </Fragment>
                    )}
                </div>
            </Router>
        );
    }
}

export default App;