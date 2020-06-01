import React from 'react'
import './Menu.scss'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {useHistory} from 'react-router-dom'





const Menu = () => {
    const history = useHistory();
   
    return (
        <div className="menu">
            <div className="list">
            <ul> 
         
       
            <NavLink to= {'/room/1'} activeClassName="isActive" exact><li><h3>01</h3> </li></NavLink>
            <NavLink to= {'/room/2'} activeClassName="isActive" exact><li><h3>02</h3> </li></NavLink>
            <NavLink to= {'/room/3'} activeClassName="isActive" exact><li><h3>03</h3> </li></NavLink>
            <NavLink to= {'/room/4'} activeClassName="isActive" exact><li><h3>04</h3> </li></NavLink>

            </ul>
            </div>
        </div>
    )
}
export default Menu;

