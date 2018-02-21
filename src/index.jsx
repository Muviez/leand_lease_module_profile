import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './App.jsx';
import Home from './components/Home/index.jsx';
import Login from './components/Auth/Login/FormLogin/index.jsx';
import Register from './components/Auth/Register/FormRegister/index.jsx';

render(
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Home} />
            <Route path='register' component={Register} />
            <Route path='login' component={Login} />
        </Route>
    </Router>,
    document.getElementById('root')
);