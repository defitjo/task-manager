import React from "react";
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../store/action_creator/authenticationAction';

const LoginNav = (props) => {
  return (
    <div className="right menu">
      <NavLink className="item" to='/new'>
        Create Task
      </NavLink>
      <NavLink to='/login' onClick={props.logout} className="item">
        Log-out
      </NavLink>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(null, mapDispatchToProps)(LoginNav);
