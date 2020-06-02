import React, { useEffect, Fragment } from 'react'
import { getAllRooms } from '../../redux/actions/rooms'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import './Home.scss'
import Menu from '../../components/Menu';
import Carrousel from '../room/Carrousel';
import Rooms from '../room/Rooms';

const Home = ({rooms}) => {
    useEffect(() => {
       getAllRooms()
    }, [])
    
    if(!rooms){
        return   <div id="preloader">
        <div id="loader"></div>
      </div> 
             
    }
    return (
      <Fragment>
<Carrousel/>
<div className="homeInfo">
      <h2>Escapes Rooms</h2>
      <p>Designed with strong narratives woven into the warp and weft of the adventures, our games will immerse you into a story-world where you are the protagonists. Every challenge you face will carry a deeper meaning than meets the eye and understanding their secrets will provide you with an added advantage into the game as the story unfolds.</p></div>
      <Rooms />
      {/* <Assessments /> */}
      </Fragment>
    )     
    }

const mapStateToProps = ({rooms}) =>({rooms:rooms?.rooms});
export default connect(mapStateToProps)  (Home);