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

      <Rooms />
      {/* <Assessments /> */}
      </Fragment>
    )     
    }

const mapStateToProps = ({rooms}) =>({rooms:rooms?.rooms});
export default connect(mapStateToProps)  (Home);