import React from 'react';
import {Link} from 'react-router-dom';

class LoginForm extends React.Component {

    handleSignIn(e) {
        e.preventDefault()
        let username = this.refs.username.value
        let password = this.refs.password.value
        this.props.onSignIn(username, password)
    }

    render() {
        return (
        <div>
            <div className="bg-login">Everyday.</div>
            <form className="fixedForm" onSubmit={this.handleSignIn.bind(this)}>
                <div className="awl">A museum of the overlooked.</div>
                <input type="text" ref="username" placeholder="enter your username" /><br />
                <input type="password" ref="password" placeholder="enter your password" /><br />
                <Link to="/" className="btn btn-danger">Log In</Link>
            </form>
        </div>
        )
    }
  
}

export default LoginForm;