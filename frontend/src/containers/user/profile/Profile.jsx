import React, { useEffect, Fragment } from 'react'
import { connect } from 'react-redux';
import { getInfo } from '../../../redux/actions/users';
import { NavLink } from 'react-router-dom';
import './Profile.scss'
import ModalPhoto from './Modal';

const Profile = ({user}) => {
    useEffect(() => {
        getInfo()
     }, [])
     const image = `http://localhost:8000/images/profile/${user?.image_path}`;
    return (
        <div className="profile">
            <img src={image} alt=""/>
            <ModalPhoto/>
            <h2>Info:</h2>
          <p>Name:  {user?.name}</p> 
           <p> Email: {user?.email}</p>
           {user?.reservations.map((reservation) =>
           {return <div>
               <h2>Reservations:</h2>
           <NavLink to= {`/room/${reservation?.room?.id}`} activeClassName="isActive" exact><p>Room: {reservation?.room?.name}</p>
             <p> Players: {reservation?.persons}</p> 
            <p> Date: {reservation?.date}</p>   
</NavLink>



               </div>}
           )}
           
           <NavLink to= {`/editprofile`} activeClassName="isActive" exact>
               <div className="buttonContainer">
               <div class="button">Edit profile</div>
               </div>
  </NavLink>
        </div> 
    )
}


const mapStateToProps = ({user}) =>({user:user?.myUser});
export default connect(mapStateToProps)  (Profile);


