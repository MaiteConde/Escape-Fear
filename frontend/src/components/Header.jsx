import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import { logout } from '../redux/actions/users'
import './Header.scss'
import MenuItem from 'antd/lib/menu/MenuItem';

const { SubMenu } = Menu;

const Header = ({user}) =>  {
 
  return <header>
  
 


    {/* <img src="https://i.pinimg.com/originals/71/72/c4/7172c46087c4acab0ea63fe6c20119db.png" alt=""/> */}

   {!user?.id ?
   
   <Menu mode="horizontal">
     <Menu.Item key="home">
        <NavLink to='/' activeClassName="isActive" exact>Home</NavLink>
        </Menu.Item>
        <Menu.Item key="login">
        <NavLink to='/login' activeClassName="isActive" exact>Login</NavLink>
        </Menu.Item>
        <Menu.Item key="register" >
        <NavLink to='/register' activeClassName="isActive" exact>Register</NavLink>
        </Menu.Item>     </Menu >
:
      
      <Menu mode="horizontal">
        <Menu.Item key="home">
        <NavLink to='/' activeClassName="isActive" exact>Home</NavLink>
        </Menu.Item>
       <MenuItem>
        <NavLink to='/profile' activeClassName="isActive" exact>Profile</NavLink></MenuItem>
        
        <MenuItem>
        <NavLink to='' onClick={logout}>Logout</NavLink></MenuItem>
        </Menu >

   }
      
      </header>
    
};


const mapStateToProps = ({user}) => ({ user: user.user });
export default connect(mapStateToProps)(Header);
