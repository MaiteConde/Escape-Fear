import React, { useEffect, Fragment } from 'react'
import { connect } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom'
import { getRoomById } from '../../redux/actions/rooms'
import { NavLink } from 'react-router-dom';
import './Room.scss'
import Menu from '../../components/Menu';
import { Rate } from 'antd';
import Moment from 'react-moment';


import ModalAssessment from '../assessment/ModalAssessment'


const Room = ({room}) => {


    let location = useLocation();
    {console.log(location.pathname)}
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
           <Menu />
           <div className="title">
  <h2>{room?.name} </h2>
         <span>  {room?.persons} players / {room?.category?.name} / {room?.time} </span>
<br/>
  {room?.history}
  { location.pathname.includes('room') == true?
<NavLink to= {`/steps/${room?.id}`} activeClassName="isActive" exact>
<div class="button">Book Now</div>
  </NavLink>: ''}
  </div>

  </div>


  </div>
 <h2>Assessments:</h2>

  {room?.assessment?.map((assessment => {
                return <div className="assessments">
                  <div className="ass">
                  <p> {assessment?.user?.name} said:</p>
                   <p>{assessment?.assessment}</p> 
                    <Rate disabled value = {assessment?.points}/>
                    </div>
                    <div className="date">
                    <p> <Moment format="YYYY/MM/DD">{assessment.createdAt}</Moment></p>
                    </div>
                </div>
            }))}
<ModalAssessment />
        </Fragment>
    )
}

const mapStateToProps = ({rooms}) =>({room:rooms?.roomId});
export default connect(mapStateToProps)  (Room);


// const LoadRoom = () => {
//   const history = useHistory();
//   function onClick(e) {
//     if(e.key==='Enter'){
//         const value =e.target.value;
//         history.push('/searchcat/'+value);
//     }
//   }
//   return (
//       <Fragment>
//            {/* <h2>Search your location</h2> */}
//       <div className="containersearch">
//       <div className="search">
//        <Search  onKeyUp={onClick} className="busca"
//     placeholder="Find a cat in your location "
//     enterButton="Search"
//     size="large"
//     onSearch={value => console.log(value)}
//   />
//       </div>
//       </div>
//       </Fragment>
//   )
// }
// export default LoadRoom;