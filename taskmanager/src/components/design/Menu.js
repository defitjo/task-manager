import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LoginNav from './LoginNav';
import LogoutNav from './LogoutNav';

const Menu = (props) => {
  const { auth, profile } = props;
  const links = auth.uid ? <LoginNav profile={profile} /> : <LogoutNav />;

  return (
    <nav className="ui blue inverted menu">
      <Link to='/' className="active item">
        Tasker
      </Link>
      <div className="right menu">
        {links} 
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Menu)
