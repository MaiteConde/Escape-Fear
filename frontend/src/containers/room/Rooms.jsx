import React, { useEffect } from 'react'
import { getAllRooms } from '../../redux/actions/rooms'
import { connect } from 'react-redux';


const Rooms = ({rooms}) => {
    useEffect(() => {
        getAllRooms()
     }, [])
    return (
                        <div className="full">
                     
           { rooms?.map(room => {
               return <div className="container">
                       {room?.name}
                 
                       
    <div className="image">
    <img alt="example" src={room?.image_path} />
    </div>
  <div className="info">
 
  <h2>{room?.name} </h2>
         <span>  {room?.persons} players / {room?.category.name} / {room?.time} </span>    
<br/>
  {room?.history}
  </div>
  
               
  </div>
                  
                  
                  
                  
                })
            }
            </div>       
        
    )
}
const mapStateToProps = ({rooms}) =>({rooms:rooms?.rooms});
export default connect(mapStateToProps)  (Rooms);