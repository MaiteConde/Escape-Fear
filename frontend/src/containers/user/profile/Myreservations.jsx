import React, { useEffect} from 'react'
import { connect } from 'react-redux';
import { getInfo} from '../../../redux/actions/users';
import { NavLink } from 'react-router-dom';
import './Myreservations.scss'
import {useHistory} from 'react-router-dom'
import { DeleteFilled } from '@ant-design/icons';
import { deleteReservation } from '../../../redux/actions/reservations';
import { Popconfirm, message } from 'antd';



const Myreservations = ({user}) => {
  const history = useHistory();
  
    useEffect(() => {
        getInfo()
     }, [])
     const image = `http://localhost:8000/images/profile/${user?.image_path}`;
     function cancel(e) {
        console.log(e);
        message.error('Click on No');
      }


      if (user.reservations.length == 0)  return <div className ="empty">
          <h2>YOU DON'T HAVE ANY RESERVATION YET</h2>
          
          </div>
      
     console.log(user.reservations.length)
    return (

        <div className="profile">
        
          
           {user?.reservations.map((reservation) =>
           
           {
            const deleteRes = () => {
              deleteReservation(reservation?.id, user?.id)
              history.push('')
            }
             return <div>
               <h2>Reservations:</h2>
              

               <Popconfirm
    title= "Are you sure?"
    onConfirm= {() =>deleteRes()}
    onCancel={cancel}
    okText="Yes"
    cancelText="No"
  >
    <a href="#"><DeleteFilled /></a>
  </Popconfirm> 


           <NavLink to= {`/room/${reservation?.room?.id}`} activeClassName="isActive" exact><p>Room: {reservation?.room?.name} </p>
</NavLink>



  
             <p> Players: {reservation?.persons}</p> 
            <p> Date: {reservation?.date} </p>   
            
           



               </div>}
           )}
                      
  
        </div> 
    )
}


const mapStateToProps = ({user}) =>({user:user?.myUser});
export default connect(mapStateToProps)  (Myreservations);