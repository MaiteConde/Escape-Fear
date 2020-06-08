// import React, { useState, useEffect } from 'react';
// import 'antd/dist/antd.css';
// import { connect } from 'react-redux';
// import {ReserHour} from '../../redux/actions/rooms'
// import { TimePicker } from 'antd';
// import moment from 'moment';
// import { getAllReservations } from '../../redux/actions/reservations';


// const format = 'HH:mm';
// const Hour = ({reservations}) => {
//     useEffect(() => {
//        getAllReservations()
//     }, [])

//     const hours = reservations?.map((res => res.hour))

//   const [value, setValue] = useState(null);

//   const onChange = time => {
//     setValue(time);
//     ReserHour(time)
//     console.log(time)
//   };
// console.log(hours)

//   return<div>
//    <TimePicker value={value} onChange={onChange} format={format}
//     disabledHours={() => [1,2,3,4,5,6,7,8,21,22,23]}
    
    
//     />;
  
 
//   </div>
// }
// const mapStateToProps = ({reservations}) =>({reservations:reservations?.reservations});
// export default connect(mapStateToProps)  (Hour);

import React from 'react';
import 'antd/dist/antd.css';
import { Select } from 'antd';
import { ReserHour } from '../../redux/actions/rooms';

const { Option } = Select;

function handleChange(value) {
  
  ReserHour(value)
}

const Hour = () => {
    
    return(
         <>
    <Select defaultValue="17:00" style={{ width: 120 }} onChange={handleChange}>

      <Option value="10:00">10:00</Option>
      <Option value="13:00">13:00</Option>
      <Option value="17:00">17:00</Option>
      <Option value="19:00">19:00</Option>
  
    </Select>
    
  </>
  )
    
}
export default Hour;

