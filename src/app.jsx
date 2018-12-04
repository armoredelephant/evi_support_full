import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './sass/base.scss'

import ArticlesLandingBody from './components//ArticleLandingPage/ArticlesLandingBody';
import ArticleActive from './components/ArticleViewingPage/ArticleActive';
import AuthChecker from './components/Admin/AuthChecker';
import Footer from './components/StaticFooter';
import Header from './components/StaticHeader';
import HomeBody from './components/HomeLandingPage/HomeBody';
import SignIn from './components/Admin/SignIn';
import VideoActive from './components/VideoViewingPage/VideoActive';
import VideoLandingBody from './components/VideoLandingPage/VideoLandingBody';

import { AuthProvider } from './components/Admin/AuthContext';


class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    {window.location.pathname.includes('/SignIn') || window.location.pathname.includes('/Dashboard') ?
                        <AuthProvider>
                            <Route exact path="/SignIn" component={SignIn} />
                            <Route exact path="/Dashboard" component={AuthChecker} />
                            {/** add another route to like /Dashboad/:UID  to be pulled from currentUser ?  or just have the component load at Dasboard if authenticated. */}
                        </AuthProvider>
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