import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

import {login} from '../../actions/session_actions';

class UserForm extends React.Component {
    constructor(props) {
        super(props); 

        this.state = {
            username: '',
            password: '',
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(inputField) {
        return (event) => this.setState({[inputField]: event.target.value})
    }

    handleClick(event) {
        event.preventDefault();
        this.props.login({user: Object.assign({}, this.state)});
    }

    render() {
        const {username, password} = this.state;
        return (
            <form>
               <div className='form-group'>
                    <label htmlFor='username'>Username</label>
                    <input className='form-control' id='username'
                        value={username} 
                        onChange={this.handleChange('username')}>
                    </input>
               </div>
               <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' className='form-control' id='password'
                        value={password} onChange={this.handleChange('password')}>
                    </input>
               </div>
               <button type='submit' className='btn btn-success btn-lg'
               onClick={this.handleClick.bind(this)}>Log In</button>
            </form>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    login: user => dispatch(login(user)),
})

export default connect(null, mapDispatchToProps)(UserForm);