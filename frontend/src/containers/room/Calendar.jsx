import React from 'react';
import 'antd/dist/antd.css';
import { Calendar} from 'antd';
import moment from 'moment';

import {reservDate} from '../../redux/actions/rooms'
class ReservationCalendar extends React.Component {
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
   
    return (
      <div>
      
        
        <Calendar value={value} onSelect={this.onSelect} onPanelChange={this.onPanelChange} />


      {/* <h2>Selected date:</h2>  */}
       {/* <h2>{selectedValue && selectedValue.format('YYYY/MM/DD')}</h2>  */}
      </div>
    );
  }
}


export default ReservationCalendar;