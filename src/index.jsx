import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './App.jsx';
import Home from './blocks/Home/index.jsx';
import Login from './blocks/Auth/Login/FormLogin/index.jsx';
import Register from './blocks/Auth/Register/FormRegister/index.jsx';

render(
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Home} />
            <Route path='/register' component={Register} />
            <Route path='/login' component={Login} />
        </Route>
    </Router>,
    document.getElementById('root')
);