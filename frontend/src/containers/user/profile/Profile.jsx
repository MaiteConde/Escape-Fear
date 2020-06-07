import React, { useEffect, Fragment } from 'react'
import { connect } from 'react-redux';
import { getInfo, logout } from '../../../redux/actions/users';
import { NavLink } from 'react-router-dom';
import './Profile.scss'
import {useHistory} from 'react-router-dom'
import ModalPhoto from './Modal';
import { DeleteFilled } from '@ant-design/icons';
import { deleteReservation } from '../../../redux/actions/reservations';
import { Popconfirm, message } from 'antd';
import { Button } from 'antd';
import { Card, Avatar } from 'antd';



const Profile = ({user}) => {
  const history = useHistory();
  
    useEffect(() => {
        getInfo()
     }, [])
     const image = `http://localhost:8000/images/profile/${user?.image_path}`;
     function cancel(e) {
        console.log(e);
        message.error('Click on No');
      }
    return (

        <div className="profile">
          <Card>
            <img src={image} alt=""/>

            <h2>Info:</h2>
          <p>Name:  {user?.name}</p> 
           <p> Email: {user?.email}</p>
          </Card>

          <div className="buttonsProf">
            <ModalPhoto/>

<NavLink to= {`/editprofile`} activeClassName="isActive" exact>
    
   <Button className="primaryButton">Edit profile</Button>
    
</NavLink>

<NavLink to= {`/reservations`} activeClassName="isActive" exact>
    
   <Button className="primaryButton">My reservation</Button>
    
</NavLink>

          </div>
          
       
        </div> 
    )
}


const mapStateToProps = ({user}) =>({user:user?.myUser});
export default connect(mapStateToProps)  (Profile);


