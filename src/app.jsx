import React from 'react';

import Navbar from './components/Navbar';

class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar />,
                <div class="col-md-6">
                    "Hello there!"
                </div>
            </div>
        );
    }
    
}

export default App;