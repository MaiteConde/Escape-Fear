import React, { useEffect, Fragment } from 'react'
import { getAllRooms } from '../../redux/actions/rooms'
import { connect } from 'react-redux';
import './Home.scss'
import { Card } from 'antd';

const Home = ({rooms}) => {
    const { Meta } = Card;

    useEffect(() => {
       getAllRooms()
    }, [])
    return (
        <div className="superfull">
            <div className="head"><p>holi</p></div>
            <div className="subtitle"><h2>Choose Your Adventure
</h2> <br/>
<span>Designed with strong narratives woven into the warp and weft of the adventures, our games will immerse you into a story-world where you are the protagonists. Every challenge you face will carry a deeper meaning than meets the eye and understanding their secrets will provide you with an added advantage into the game as the story unfolds.</span>
</div>
            <div className="full">
           { rooms?.map(room => {
               return (
                   <div className="container">
                 
                       
    <div className="image">
    <img alt="example" src={room?.image_path} />
    </div>
  <div className="info">
 
  <h2>{room?.name} </h2>
         <span>  {room?.persons} players / {room?.category.name} / {room?.time} </span>    
<br/>
  {room?.history}
  <a class="btn btn-3">Book Now</a> 
  </div>
  
               
  </div>
                  
                  )
                  
                  
                })
            }
            </div>        
        </div>
    )
}

const mapStateToProps = ({rooms}) =>({rooms:rooms?.rooms});
export default connect(mapStateToProps)  (Home);