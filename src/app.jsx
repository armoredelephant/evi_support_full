import React from 'react';

import Navbar from './components/Navbar';
import HomeBody from './components/HomeBody';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Navbar />
                <HomeBody />
            </div>
        );
    }
    
}

export default App;