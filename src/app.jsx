import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './sass/base.scss'

import ArticlesLandingBody from './components//ArticleLandingPage/ArticlesLandingBody';
import ArticleActive from './components/ArticleViewingPage/ArticleActive';
import Admin from './components/Admin/Admin';
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
                    {window.location.pathname.includes('/Admin') ?
                        <Route path="/Admin" component={Admin} />
                    : (
                        <Fragment>
                            <Header />
                            <Route exact path="/" component={HomeBody} />
                            <Route exact path="/articles" component={ArticlesLandingBody} />
                            <Route path="/articles/:category/:itemId" component={ArticleActive} />
                            <Route exact path="/videos" component={VideoLandingBody} />
                            <Route path="/videos/:category/:itemId" component={VideoActive} />
                            <Footer />
                        </Fragment>
                    )}
                </div>
            </Router>
        );
    }
}

export default App;