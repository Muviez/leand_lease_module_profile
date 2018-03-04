import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App.jsx';
import Home from './components/Home/index.jsx';
import Login from './components/Auth/Login/FormLoginPage/index.jsx';
import Register from './components/Auth/Register/FormRegisterPage/index.jsx';
import ValidationForms from './components/ValidationForm.jsx';
import User from './components/UserProfile/index.jsx';
import Panels from './components/UserProfile/Components/Panels.jsx';

export default (
    <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='register' component={Register} />
        <Route path='login' component={Login} />
        <Route path='validation' component={ValidationForms} />
        <Route path='userprofile' component={User} />
    </Route>
)