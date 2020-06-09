

import React from 'react';
import 'antd/dist/antd.css';
import { Select } from 'antd';
import { ReserHour } from '../../../redux/actions/rooms';

const { Option } = Select;

function handleChange(value) {
  
  ReserHour(value)
}

const Hour = () => {
    
    return(
         <>
    <Select defaultValue="hour" style={{ width: 120 }} onChange={handleChange}>

      <Option value="10:00">10:00</Option>
      <Option value="13:00">13:00</Option>
      <Option value="17:00">17:00</Option>
      <Option value="19:00">19:00</Option>
  
    </Select>
    
  </>
  )
    
}
export default Hour;

