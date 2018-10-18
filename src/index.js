import React from 'react';
import ReactDOM from 'reacrt-dom';

// Without resolve: in webpack.config, we would need to use ./App.jsx
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

