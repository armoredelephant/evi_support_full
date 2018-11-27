import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './sass/base.scss'

import AdminPortal from './components/Admin/AdminPortal.jsx';
import ArticlesLandingBody from './components//ArticleLandingPage/ArticlesLandingBody';
import ArticleActive from './components/ArticleViewingPage/ArticleActive';
import HomeBody from './components/HomeLandingPage/HomeBody';
import VideoActive from './components/VideoViewingPage/VideoActive';
import VideoLandingBody from './components/VideoLandingPage/VideoLandingBody';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Route exact path="/" component={HomeBody} />
                    <Route exact path="/Articles" component={ArticlesLandingBody} />
                    <Route path="/Articles/:category/:itemId" component={ArticleActive} />
                    <Route exact path="/Videos" component={VideoLandingBody} />
                    <Route path="/Videos/:category/:itemId" component={VideoActive} />
                    <Route exact path="/AdminPortal" component={AdminPortal} />
                </div>
            </Router>
        );
    }
    
}

export default App;