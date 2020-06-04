import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

 
const AdminControl = ({ children, user }) => {
const userRole = user?.role
 
  return userRole === 'admin' ?  children : (
    <Redirect
      to={{
        pathname: '/',
    }}
    />
  );
};


const mapStateToProps = ({user}) => ({ user: user?.user });
export default connect(mapStateToProps)(AdminControl);
