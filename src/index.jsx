import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';

import App from './App.jsx';
import Home from './components/Home/index.jsx';
import Login from './components/Auth/Login/FormLoginPage/index.jsx';
import Register from './components/Auth/Register/FormRegisterPage/index.jsx';

import routes from './routes.jsx'

render(
    <Router history={browserHistory} routes={routes} />,
    document.getElementById('root')
);