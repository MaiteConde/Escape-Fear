import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { logout } from '../redux/actions/users'
import './Header.scss'
import logo from './logo.png'



const Header = ({user}) =>  {
 
  return <nav>
    {!user?.id ?
    <div className="containHeader"> 
    
    <div><img src={logo} alt=""/></div>
      <div>
    <NavLink to='/' activeClassName="isActive" exact>Home</NavLink>
     <NavLink to='/login' activeClassName="isActive" exact>Login</NavLink>
     <NavLink to='/register' activeClassName="isActive" exact>Register</NavLink>
     </div>
     </div>:  
     <div className="containHeader">
<div><img src={logo} alt=""/></div>
<div>
           <NavLink to='/' activeClassName="isActive" exact>Home</NavLink>
           <NavLink to='/profile' activeClassName="isActive" exact>Profile</NavLink>
           <NavLink to='' onClick={logout}>Logout</NavLink>
{
  user?.role === 'admin' ?
  <NavLink to='/admin' activeClassName="isActive" exact>Admin</NavLink>: ''

}
</div>
     </div>
     
    }


  </nav>

    
};


const mapStateToProps = ({user}) => ({ user: user?.user });
export default connect(mapStateToProps)(Header);
