import React from "react";
import { NavLink } from 'react-router-dom';

const LogoutNav = () => {
  return (
    <div className="right menu">
      <NavLink to='/login' className="item">
        Log-in
      </NavLink>
      <NavLink to='/join' className="item">
        Sign Up
      </NavLink>
    </div>
  );
};

export default LogoutNav;
