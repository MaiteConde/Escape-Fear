import React, { useEffect, Fragment } from 'react'
import { connect } from 'react-redux';
import { getInfo, logout } from '../../../redux/actions/users';
import { NavLink } from 'react-router-dom';
import './Profile.scss'
import ModalPhoto from './Modal';
import { DeleteFilled } from '@ant-design/icons';
import { deleteReservation } from '../../../redux/actions/reservations';
import { Popconfirm, message } from 'antd';
import { Button } from 'antd';


const Profile = ({user}) => {
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
            <img src={image} alt=""/>
            <h2>Info:</h2>
          <p>Name:  {user?.name}</p> 
           <p> Email: {user?.email}</p>
           {user?.reservations.map((reservation) =>
           {return <div>
               <h2>Reservations:</h2>
               <Popconfirm
    title= "Are you sure?"
    onConfirm= {() =>deleteReservation(reservation?.id)}
    onCancel={cancel}
    okText="Yes"
    cancelText="No"
  >
    <a href="#"><DeleteFilled /></a>
  </Popconfirm> 
           <NavLink to= {`/room/${reservation?.room?.id}`} activeClassName="isActive" exact><p>Room: {reservation?.room?.name} </p>
</NavLink>



  
             <p> Players: {reservation?.persons}</p> 
            <p> Date: {reservation?.date} </p>   
            
           



               </div>}
           )}
                       <ModalPhoto/>

           <NavLink to= {`/editprofile`} activeClassName="isActive" exact>
               
              <Button className="primaryButton">Edit profile</Button>
               
  </NavLink>
  
        </div> 
    )
}


const mapStateToProps = ({user}) =>({user:user?.myUser});
export default connect(mapStateToProps)  (Profile);


