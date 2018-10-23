import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomeHeader from './components/HomeHeader';
import HomeBody from './components/HomeBody';
import HomeFooter from './components/HomeFooter';
import SideNavBar from './components/SideNavBar';
import FakePage from './components/FakePage';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <HomeHeader />
                    {/* <SideNavBar /> */}
                    <Route path="/Landing" component={HomeBody} />
                    <Route path="#" component={FakePage} />
                    <HomeFooter />
                </div>
            </Router>
        );
    }
    
}

export default App;