import React, { useEffect, Fragment } from 'react'
import { connect } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom'
import { getRoomById } from '../../redux/actions/rooms'
import { NavLink } from 'react-router-dom';
import './Room.scss'


const Room = ({room}) => {
    let location = useLocation();
    {console.log(location.pathname)}
    const id = useParams().id
    useEffect(() => {
        getRoomById(id)
     }, [])

    

if(room?.id != id ){ return <div id="preloader">
    <div id="loader"></div>
    
  </div>
}
    return (
        <div className="container">
            <div className="image">
    <img alt="example" src={room?.image_path} />
    </div>
  <div className="info">
 
  <h2>{room?.name} </h2>
         <span>  {room?.persons} players / {room?.category?.name} / {room?.time} </span>    
<br/>
  {room?.history}

{ location.pathname.includes('room') == true?


<NavLink to= {`/steps/${room?.id}`} activeClassName="isActive" exact>
  <a class="btn btn-3">Book Now</a> 
  </NavLink>: ''}
 

  </div>

 
        </div>
    )
}

const mapStateToProps = ({rooms}) =>({room:rooms?.roomId});
export default connect(mapStateToProps)  (Room);