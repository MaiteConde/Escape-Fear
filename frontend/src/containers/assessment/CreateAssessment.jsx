import React from 'react'
import { createReservation } from '../../redux/actions/reservations';
import { connect } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom'
import { Button, notification } from 'antd';
import {useHistory} from 'react-router-dom';
import { Rate } from 'antd';
import { createAssessment } from '../../redux/actions/assessments';



const CreateAssessment = ({room, user, totalP, reserDate}) => {
    const history = useHistory();
    const id = useParams().id
   
    const handleSubmit = event => {
        event.preventDefault();
        const assessment = {
          assessment: event.target.assessment.value,
         points: localStorage.getItem('index')
        }
        
        createAssessment(assessment, id)
        .then(res => {
            notification.success({message:'Reservation created. Check your email!'})
           
        })
        .catch((error)=>{
           console.error(error)
        })
    }
    return (
        <div className="editPhotoProfile">
        <form action="" onSubmit={handleSubmit}>
            <input type="text" name="assessment"/>
            <Rate  
          onChange={(index) => localStorage.setItem('index', `${index}`)}
         />
           
           <Button className="primaryButton" type="primary" htmlType="submit">
              Write
            </Button>
              
                  
                </form>
        </div>
        
       
    )
}

const mapStateToProps = ({rooms, user}) =>({room:rooms?.roomId, totalP:rooms?.price, reserDate:rooms?.date, user: user?.user});
export default connect(mapStateToProps)  (CreateAssessment);

