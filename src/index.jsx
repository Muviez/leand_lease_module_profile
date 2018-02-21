import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import App from './App.jsx';

render(
    <Router history={hashHistory}>
        <Route path="/" component={App} />
    </Router>,
    document.getElementById('root')
);