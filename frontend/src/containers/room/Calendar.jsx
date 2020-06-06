import React from 'react';
import 'antd/dist/antd.css';
import { Calendar} from 'antd';
import moment from 'moment';
import { connect } from 'react-redux';

import {getAllReservations} from '../../redux/actions/reservations'

import {reservDate} from '../../redux/actions/rooms'



class ReservationCalendar extends React.Component {
  componentDidMount(props){
    getAllReservations()
  }


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

   const dates = this.props.reservations.map((res => res.date))
   
    return (
      <div>
  
 <Calendar value={value} onSelect={this.onSelect} onPanelChange={this.onPanelChange}
       disabledDate={ current => {
         
        let index = dates.findIndex(date => date === moment(current).format('YYYY-MM-DD'))
        return index !== -1 && true

       }
       }
      />

    
      </div>
    );
  }
}



const mapStateToProps = ({reservations}) =>({reservations:reservations?.reservations});
export default connect(mapStateToProps)  (ReservationCalendar);