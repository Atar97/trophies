import React from 'react';
import {connect} from 'react-router';
import { Link } from 'react-router-dom';

class UserForm extends React.Component {
    render() {
        return (
            <form>
               <div className='form-group'>

               </div>
            </form>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    login: user => dispatch(login(user)),
})
export default UserForm