import React from 'react'
import { createReservation } from '../../redux/actions/reservations';
import { connect } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom'
import { reservDate } from '../../redux/actions/rooms';
import Moment from 'react-moment';
import moment from 'moment';




const CreateReservation = ({room, user, totalP, reserDate}) => {
    let location = useLocation();
    

    const id = useParams().id

    const handleSubmit = event => {
        event.preventDefault();
        const reservation = {
            persons: totalP,
            date: moment(reserDate).format('YYYY/MM/DD'),
            user_id: user?.id,
            room_id: id,
            price: 54
            
        }
        console.log(user?.id)
        createReservation(reservation, id)
        .then(res => {
          
           console.log(reservation)
        })
        .catch(()=>{
           
        })
    }
    return (
        <div>
         
           <button onClick={handleSubmit}></button>
        </div>
    )
}

const mapStateToProps = ({rooms, user}) =>({room:rooms?.roomId, totalP:rooms?.price, reserDate:rooms?.date, user: user?.user});
export default connect(mapStateToProps)  (CreateReservation);

