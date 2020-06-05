import React from 'react';
import 'antd/dist/antd.css';
import { Calendar} from 'antd';
import moment from 'moment';
import { connect } from 'react-redux';

import {getAllReservations} from '../../redux/actions/reservations'

import {reservDate} from '../../redux/actions/rooms'

getAllReservations()

class ReservationCalendar extends React.Component {
  state = {
    value: moment(),
    selectedValue: moment(),
  };
  
  onSelect = value => {
    // console.log(res)
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

   
    return (
      <div>

        {/* {reservations?.map((res=>res.date))} */}
        <Calendar value={value} onSelect={this.onSelect} onPanelChange={this.onPanelChange}
         disabledDate={current => {
           return current && current < moment('2020-06-07') ;
        }}
        />

      </div>
    );
  }
}



const mapStateToProps = ({reservations}) =>({reservations:reservations?.reservations});
export default connect(mapStateToProps)  (ReservationCalendar);