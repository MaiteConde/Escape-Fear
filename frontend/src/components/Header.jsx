import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { logout } from '../redux/actions/users'
import './Header.scss'


const Header = ({user}) =>  {
 
  return <nav>
    {!user?.id ?
    <div> 
      {/* <span> <img src="https://image.flaticon.com/icons/png/512/70/70712.png" alt=""/> <p>Escape Room</p></span> */}
     
    <NavLink to='/' activeClassName="isActive" exact>Home</NavLink>
     <NavLink to='/login' activeClassName="isActive" exact>Login</NavLink>
     <NavLink to='/register' activeClassName="isActive" exact>Register</NavLink>
     </div>:  
     <div>
      {/* <span> <img src="https://image.flaticon.com/icons/png/512/70/70712.png" alt=""/> Escape Room</span> */}

           <NavLink to='/' activeClassName="isActive" exact>Home</NavLink>
           <NavLink to='/profile' activeClassName="isActive" exact>Profile</NavLink>
           <NavLink to='' onClick={logout}>Logout</NavLink>
{
  user?.role === 'admin' ?
  <NavLink to='/admin' activeClassName="isActive" exact>Admin</NavLink>: ''

}
     </div>
     
    }


  </nav>

    
};


const mapStateToProps = ({user}) => ({ user: user?.user });
export default connect(mapStateToProps)(Header);
