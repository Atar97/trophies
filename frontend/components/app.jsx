import React from 'react';
import { AuthRoute, ProtectedRoute, AdminRoute } from '../util/route_util';
import { Route, Redirect, Switch } from 'react-router-dom';

import LoginForm from './users/login_form';
import Navbar from './shared/navbar';
import NewUserForm from './users/new_user_form';

export default () => (
    <div>
        <Navbar />
        <div className='container'>
            <Switch>
                <AuthRoute path='/login' component={LoginForm} />
                <AdminRoute path='/createUser' component={NewUserForm} />
            </Switch>
        </div>
    </div>
)