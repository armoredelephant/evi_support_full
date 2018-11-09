import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './sass/base.scss'

import Articles from './components/Articles'
import ArticlesLanding from './components/ArticlesLanding';
import ArticleLink from './components/ExampleArticleLink'
import FakePage from './components/FakePage';
import HomeBody from './components/HomeBody';
import HomeFooter from './components/HomeFooter';
import HomeHeader from './components/HomeHeader';
import SideNavBar from './components/SideNavBar';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <HomeHeader />
                    <Route exact path="/" component={HomeBody} />
                    <Switch>
                        <Route exact path="/Articles" component={ArticlesLanding} />
                        <Route path="/Articles/:category/:articleId" component={ArticleLink} />
                    </Switch>
                    <Route path="#" component={FakePage} />
                    <HomeFooter />
                </div>
            </Router>
        );
    }
    
}

export default App;