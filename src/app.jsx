import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './sass/base.scss'

import ArticlesLandingBody from './components//ArticleLandingPage/ArticlesLandingBody'
import ArticleActive from './components/ArticleViewingPage/ArticleActive'
import HomeBody from './components/HomeLandingPage/HomeBody';
import Footer from './components/StaticFooter';
import Header from './components/StaticHeader';
import VideoActive from './components/VideoViewingPage/VideoActive';
import VideoLandingBody from './components/VideoLandingPage/VideoLandingBody';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Header />
                        <Switch>
                            <Route exact path="/" component={HomeBody} />
                        </Switch>
                        <Switch>
                            <Route exact path="/Articles" component={ArticlesLandingBody} />
                            <Route path="/Articles/:category/:itemId" component={ArticleActive} />
                        </Switch>
                        <Switch>
                            <Route exact path="/Videos" component={VideoLandingBody} />
                            <Route path="/Videos/:category/:itemId" component={VideoActive} />
                        </Switch>
                    <Footer />
                </div>
            </Router>
        );
    }
    
}

export default App;