import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './App.jsx';
import Home from './blocks/Home/index.jsx';
import FormLogin from './blocks/auth/Login/FormLogin/index.jsx';
import FormRegister from './blocks/auth/Register/FormRegister/index.jsx';

render(
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={App} />
            <Route path='register' component={Register} />
            <Route path='login' component={Login} />
        </Route>
    </Router>,
    document.getElementById('root')
);