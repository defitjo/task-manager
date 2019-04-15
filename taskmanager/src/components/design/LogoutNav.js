import React from "react";
import { NavLink } from 'react-router-dom';

const LogoutNav = () => {
  return (
    <div className="right menu">
      <NavLink to='/login' href="" className="item">
        Log-in
      </NavLink>
      <NavLink to='/join' href="" className="item">
        Sign Up
      </NavLink>
    </div>
  );
};

export default LogoutNav;
