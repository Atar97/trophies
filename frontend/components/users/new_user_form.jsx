import React from 'react';
import {connect} from 'react-redux';

class NewUserForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fname: '',
            lname: '',
            userType: '',
            email: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleRadio = this.handleRadio.bind(this);
    } 
    handleChange(inputField) {
        return (event) => this.setState({ [inputField]: event.target.value })
    }

    handleRadio(event) {
        this.setState({userType: event.target.value})
    }

    handleClick(event) {
        event.preventDefault();
        this.props.createUser({ user: Object.assign({}, this.state) });
    }

    render() {
        const { fname, lname, email} = this.state;
        return (
            <div className='content col-6 m-3'>
                <form>
                    <div className='form-group'>
                        <label htmlFor='fname'>First Name</label>
                        <input className='form-control' id='fname'
                            value={fname}
                            onChange={this.handleChange('fname')}>
                        </input>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='lname'>Last Name</label>
                        <input className='form-control' id='lname'
                            value={lname}
                            onChange={this.handleChange('lname')}>
                        </input>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='email'>Email Address</label>
                        <input className='form-control' id='email'
                            value={email} type='email'
                            onChange={this.handleChange('email')}>
                        </input>
                    </div>
                    <div className='form-group d-flex flex-column'>
                        <label>User Type</label>
                        <label htmlFor='NIAAA'>NIAAA Admin
                            <input name='user-type' className='m-1'
                                value='admin' id='NIAAA' type='radio' 
                                onChange={this.handleRadio}>
                            </input>
                        </label>
                        <label htmlFor='state-chair'>State Chair
                            <input name='user-type' className='m-1'
                                value='state' id='state-chair' type='radio'
                                onChange={this.handleRadio}>
                            </input>
                        </label>
                        <label htmlFor='evaluator'>Evaluator
                            <input name='user-type' className='m-1'
                                value='evaluator' id='evaluator' type='radio'
                                onChange={this.handleRadio}>
                            </input>
                        </label>
                    </div>
                    <button type='submit' className='btn btn-success'
                        onClick={this.handleClick.bind(this)}>Create User</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    createUser: input => console.log(input),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewUserForm);