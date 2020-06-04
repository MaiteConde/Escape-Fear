import React from 'react';
import { Redirect } from 'react-router-dom';
import { notification } from 'antd';
 
const Logued = ({ children }) => {
  const hasToken = localStorage.getItem('authToken');

  return hasToken ?  children : (
    <Redirect
      to={{
        pathname: '/login',
    }}
    />
  );
};

export default Logued;