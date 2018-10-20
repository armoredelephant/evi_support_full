import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import HomeBody from './components/HomeBody';
import HomeFooter from './components/HomeFooter';
import FakePage from './components/FakePage';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Navbar />
                    <Route path="/Landing" component={HomeBody} />
                    <Route path="/fake" component={FakePage} />
                    <HomeFooter />
                </div>
            </Router>
        );
    }
    
}

export default App;