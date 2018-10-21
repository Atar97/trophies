import React from 'react';
import {Link} from 'react-router-dom';

class Navbar extends React.Component {

    render() {
        // let newUser;
        // if 
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
                </ul>
            </nav>        
        ); 
    }
}

export default Navbar;