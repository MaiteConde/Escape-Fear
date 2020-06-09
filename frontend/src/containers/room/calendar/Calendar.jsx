import React from 'react';
import 'antd/dist/antd.css';
import { Calendar} from 'antd';
import moment from 'moment';
import { connect } from 'react-redux';

import {getAllReservations} from '../../../redux/actions/reservations'

import {reservDate} from '../../../redux/actions/rooms'
import Hour from './Hour';



class ReservationCalendar extends React.Component { 
 
  componentDidMount(){
   
    getAllReservations()
    
  }
  
  state = {
    value: moment(),
    selectedValue: moment(),
  };
  
  onSelect = value => {
    this.setState({
      value,
      selectedValue: value,
      
    });
  };
  
  onPanelChange = value => {
    this.setState({ value });
  };
  
  render() {
    
    const { value, selectedValue } = this.state;
    reservDate(selectedValue)

   const dates = this.props?.reservations?.map((res => res.date))
   const roomsId = this.props?.reservations?.map((res => res.room_id))
   const id = this.props.idUrl
  


    return (
      <div className="containerDate">
  
      <Calendar fullscreen={false} value={value} onSelect={this.onSelect} onPanelChange={this.onPanelChange}
       disabledDate={ current => {
      
       if (roomsId?.includes(+ id)) {

        let index = dates?.findIndex(date => date === moment(current).format('YYYY-MM-DD'))
        return  index !== -1 && true  || current && current.valueOf() < Date.now();
         
      }
      return current && current.valueOf() < Date.now();
    
       }
       }

       
      />

    <Hour />
      </div>
    );
  }
}



const mapStateToProps = ({reservations, rooms}) =>({reservations:reservations?.reservations, idUrl:rooms?.id});
export default connect(mapStateToProps) (ReservationCalendar);