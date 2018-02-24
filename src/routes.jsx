import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App.jsx';
import Home from './components/Home/index.jsx';
import Login from './components/Auth/Login/FormLoginPage/index.jsx';
import Register from './components/Auth/Register/FormRegisterPage/index.jsx';

export default (
    <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='register' component={Register} />
        <Route path='login' component={Login} />
    </Route>
)