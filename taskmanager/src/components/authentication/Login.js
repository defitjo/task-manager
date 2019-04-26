import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../store/action_creator/authenticationAction';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  state = {
    email: '',
    password: ''
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state);
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to='/' />
    return (
      <div className="ui two column centered grid">
        <div className="row">
          <div className="two column wide">
            <form className="ui form" onSubmit={this.handleSubmit}>
              <h3 className="ui dividing header">Login</h3>
              <div className="required field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" onChange={this.handleChange} />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={this.handleChange} />
                <div>
                  <button id="login-button" className="ui positive right labeled icon button">
                    <i className="sign-in icon"></i>
                    Login
                  </button>
                  <div className="ui red center">
                    {authError ? <p>{authError}</p> : null}
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (creds) => dispatch(login(creds)) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
