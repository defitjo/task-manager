import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { join } from '../../store/action_creator/authenticationAction';

class Join extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.join(this.state);
  }
  handleChange = (e) => {
    this.setState({
    [e.target.id]: e.target.value
    })
  }
  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to='/' />
    return (
      <div className="ui two column centered grid">
        <div className="row">
          <div className="two column wide">
            <form className="ui form" onSubmit={this.handleSubmit}>
              <h3 className="ui dividing header">Join Task Manager</h3>
              <div className="field">
                <label htmlFor="firstName">First Name</label>
                <input type="text" onChange={this.handleChange} />
                <label htmlFor="lastName">Last Name</label>
                <input type="text" onChange={this.handleChange} />
                <label htmlFor="email">Email</label>
                <input type="email" onChange={this.handleChange} />
                <label htmlFor="password">Password</label>
                <input type="password" onChange={this.handleChange} />
                <div>
                  <button className="ui right labeled icon button">
                    <i className="sign-in icon"></i>
                    Join
                  </button>
                  <div className="ui red center">
                    { authError ? <p>{authError}</p> : null }
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    join: (info) => dispatch(join(info))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Join)
