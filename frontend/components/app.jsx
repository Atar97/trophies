import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Redirect, Switch } from 'react-router-dom';

import UserForm from './users/user_form';

export default () => (
    <div>
        <Switch>
            <Route path='/signup' component={UserForm} />
        </Switch>
    </div>
)