import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../../actions/session_actions';

class Navbar extends React.Component {

    logout() {
        this.props.logout();
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/awards">Awards</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/archive">Archive</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/createUser">New User</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <p onClick={this.logout.bind(this)} className="nav-link">Logout</p>
                    </li>

                </ul>
            </nav>        
        ); 
    }
}

const mStP = state => ({

})

const mDtP = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(mStP, mDtP)(Navbar);