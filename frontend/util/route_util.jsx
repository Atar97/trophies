import { Route, Component, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        !loggedIn ? (
            <Component {...props} />
        ) : (
                <Redirect to='/' />
            )
    )} />
);

const Protected = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        loggedIn ? (
            <Component {...props} />
        ) : (
                <Redirect to='/login' />
            )
    )} />
);

const Admin = ({ component: Component, path, currentUser, exact }) => (
  <Route path={path} exact={exact} render={props => {
      if (currentUser && currentUser.userType === 'admin') {
        return <Component {...props} />
      } 
        return <Redirect to="/" />
    }}/>
);

const mapStateToProps = state => {
    return { loggedIn: Boolean(state.session.id),
              currentUser: state.entities.users[state.session.id] };
};

export const AuthRoute = withRouter(
    connect(mapStateToProps, null)(Auth));

export const ProtectedRoute = withRouter(
    connect(mapStateToProps, null)(Protected));

export const AdminRoute = withRouter(
    connect(mapStateToProps, null)(Admin));
