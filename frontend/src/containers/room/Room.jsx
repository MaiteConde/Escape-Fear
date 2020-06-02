import React, { useEffect, Fragment } from 'react'
import { connect } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom'
import { getRoomById } from '../../redux/actions/rooms'
import { NavLink } from 'react-router-dom';
import './Room.scss'
import Menu from '../../components/Menu';
import { Rate } from 'antd';
import Moment from 'react-moment';
import { Button } from 'antd';
import ModalAssessment from '../assessment/ModalAssessment'


const Room = ({room}) => {
    let location = useLocation();
    const id = useParams().id
    useEffect(() => {
        getRoomById(id)
     }, [])

    

if(room?.id != id ){  getRoomById(id); return <div id="preloader">
    <div id="loader"></div>

  </div>
}
    return (
      <Fragment>


        <div className="room">
    <img alt="example" src={room?.image_path} />
    </div>
  <div className="info">


           <div className="roomInfo">
              { location.pathname.includes('room') == true?
              <Menu />:  <div></div>
              }
          

           <div className="title">
  <h2>{room?.name} </h2>
         <span>  {room?.persons} players / {room?.category?.name} / {room?.time} </span>
<br/>
  {room?.history} 
  { location.pathname.includes('room') == true?
<NavLink to= {`/steps/${room?.id}`} activeClassName="isActive" exact>
  <div className="buttonsRoom"><Button className="primaryButton">Book now</Button></div>

  </NavLink>: ''}
  </div>

  </div>


  </div>
  
 { location.pathname.includes('room') == true?
 <div>
 <h2>Assessments:</h2>
 {room?.assessment?.length == 0?
<div> <h2>Be the first in write and assessment!</h2></div>: ''}

  {room?.assessment?.map((assessment => {
    return (
      <div className="assessments">
    
                  <div className="ass">
                  <p> {assessment?.user?.name} said:</p>
                   <p>{assessment?.assessment}</p> 
                    <Rate disabled value = {assessment?.points}/>
                    </div> 
                    <div className="date">
                    <p> <Moment format="YYYY/MM/DD">{assessment.createdAt}</Moment></p>
                    </div>
                </div>
   ) }))} 
<ModalAssessment />
   </div>:''}
        </Fragment>
    )
}

const mapStateToProps = ({rooms}) =>({room:rooms?.roomId});
export default connect(mapStateToProps)  (Room);


