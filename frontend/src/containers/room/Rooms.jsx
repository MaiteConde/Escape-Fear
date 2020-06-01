import React, { useEffect, Fragment } from 'react'
import { getAllRooms } from '../../redux/actions/rooms'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import Menu from '../../components/Menu';

import '../home/Home.scss'
import Header from '../../components/Header';

const Rooms = ({rooms}) => {
    useEffect(() => {
        getAllRooms()
     }, [])
     
     if(!rooms){
         return   <div id="preloader">
         <div id="loader"></div>
       </div> 
              
     }
     return (
       
       <div className="full">
       
              
       
            { rooms?.map(room => {
                return (
                
 <Fragment >
 
 {room?.id == 1? 
 <div className="room">
     <img alt="example" src={room?.image_path} />
     </div>
      :<div></div>
    } 
     {room?.id == 1?
   <div className="infoHome">
   <div className="roomInfo">
   <Menu/>
   <div className="title">
   <h2>{room?.name} </h2>
          <span>  {room?.persons} players / {room?.category.name} / {room?.time} </span>    
 <br/>
   {room?.history}
   <NavLink to= {`/steps/${room?.id}`} activeClassName="isActive" exact>
   <a class="btn btn-3">Book Now</a> 
   </NavLink>
  
   </div>
   </div>          
   </div>
    :''} 
 </Fragment>
    )
                   
                   
                 })
             }
             </div>       
           
     )
 }
 
const mapStateToProps = ({rooms}) =>({rooms:rooms?.rooms});
export default connect(mapStateToProps)  (Rooms);