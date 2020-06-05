import React, { useEffect, Fragment } from 'react'
import { getAllRooms, deleteRoom } from '../../redux/actions/rooms'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Button } from 'antd';
import './Admin.scss'
import { Card } from 'antd';

// import '../containers/home/Home.scss'
const { Meta } = Card;

const Admin = ({rooms}) => {
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
               
                  <Card
                  
                  style={{ width: 240 }}
                  cover={<img alt="example" src={room?.image_path} />}
                >
                  <Meta title={room?.name}  />
                  <span>  {room?.persons} players / {room?.category.name} / {room?.time} </span>    
                  <div className="buttons">
                  
                  <Button  onClick={deleteRoom} className="secondButton" type="dashed">Delete</Button>
                  <NavLink to= {`/editroom/${room?.id}`} activeClassName="isActive" exact>
                  <Button className="primaryButton" type="primary">Edit</Button></NavLink>
                  </div> 
                </Card>
  
    )
                   
                   
                 })
             }
             </div>       
           
     )
 }
 
const mapStateToProps = ({rooms}) =>({rooms:rooms?.rooms});
export default connect(mapStateToProps)  (Admin);