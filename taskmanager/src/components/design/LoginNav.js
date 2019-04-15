import React from "react";
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../store/action_creator/authenticationAction';

const LoginNav = (props) => {
  return (
    <div className="right menu">
      <NavLink to='/new'>
        <a className="item">
          Create Task
        </a>
      </NavLink>
      <a onClick={props.logout} className="item">
        Log-out
      </a>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(null, mapDispatchToProps)(LoginNav);
