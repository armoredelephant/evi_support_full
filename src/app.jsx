import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './sass/base.scss'

import HomeHeader from './components/HomeHeader';
import HomeBody from './components/HomeBody';
import HomeFooter from './components/HomeFooter';
import SideNavBar from './components/SideNavBar';
import ArticlesLanding from './components/ArticlesLanding';
import FakePage from './components/FakePage';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <HomeHeader />
                    <Route exact path="/" component={HomeBody} />
                    <Route path="/Articles/:id" component={Articles} />
                    {/* <Route path="/Article/:article_name" component={Article} /> */}
                    <Route path="#" component={FakePage} />
                    <HomeFooter />
                </div>
            </Router>
        );
    }
    
}

export default App;