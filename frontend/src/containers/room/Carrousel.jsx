import React, { useEffect, Fragment } from 'react'
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import { getAllRooms } from '../../redux/actions/rooms';
import { connect } from 'react-redux';
import './Carrousel.scss'


 const Carrousel = ({rooms}) => {
    useEffect(() => {
        getAllRooms() 
     }, [])
     return (
         <div>
            <Carousel  autoplay>
            { rooms?.map(room => {
             const divStyle = {
               color: 'white',
                // backgroundimage: `image(${room?.image_path})`
                backgroundcolor: 'pink'
              };
             
               return (
                   <Fragment>
{/* <div className="room" >  <img alt="example" src={room?.image_path} /> </div> */}
<div className="carrouInfo"  style={divStyle} >
    <div><h2>{room?.name}</h2></div>
<div><p>{room?.history}</p></div>
 
</div>

</Fragment>
             
               )
            }
            )}

  </Carousel>
        </div>
    )
}

const mapStateToProps = ({rooms}) =>({rooms:rooms?.rooms});
export default connect(mapStateToProps)  (Carrousel);


