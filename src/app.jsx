import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './sass/base.scss'

import ArticlesLandingBody from './components/ArticlesLandingBody'
import ArticleActive from './components/articles/ArticleActive'
import HomeBody from './components/HomeBody';
import Footer from './components/StaticFooter';
import Header from './components/StaticHeader';

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
                        <Route path="/Articles/:category/:articleId" component={ArticleActive} />
                    </Switch>
                    <Footer />
                </div>
            </Router>
        );
    }
    
}

export default App;