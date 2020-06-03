import React, { useEffect, Fragment } from 'react'
import { getAllRooms } from '../../redux/actions/rooms'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import './Home.scss'
import Menu from '../../components/Menu';
import Carrousel from '../room/Carrousel';
import Rooms from '../room/Rooms';
import SimpleMap from '../../components/Map';

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
      <div className="content">
      <h2>Escape if you can</h2>
      <h4>Nowhere To Run, Nowhere To Hide</h4>
      <p>You've got to think to get outside. Are you and your teammates brave enough to get locked in our rooms and attempt to solve the puzzles?</p>
      </div>
      <div className="icons">
        <div>
        <img src="https://image.flaticon.com/icons/png/512/124/124607.png" alt=""/>
        <p>Full-Sensory Experience</p>
        </div>
       <div>
        <img src="https://image.flaticon.com/icons/png/512/112/112757.png" alt=""/>
         <p>Vast Environments</p>
       </div>
       <div>
        <img src="https://image.flaticon.com/icons/png/512/90/90216.png" alt=""/>
      <p>Immersive Storytelling</p>
       </div>
      </div>
      {/* <SimpleMap/> */}
      </Fragment>
    )     
    }

const mapStateToProps = ({rooms}) =>({rooms:rooms?.rooms});
export default connect(mapStateToProps)  (Home);