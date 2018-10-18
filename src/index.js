import React from 'react';
import ReactDOM from 'react-dom';

// Without resolve: in webpack.config, we would need to use ./App.jsx
import App from './App';
import './sass/base.scss'

ReactDOM.render(<App />, document.getElementById('root'));

