
import React,  { useState }  from 'react';
import 'antd/dist/antd.css';
import {useHistory} from 'react-router-dom';
import { notification } from 'antd';
import { Input, Button } from 'antd';
import { Select } from 'antd';
import {postRoom} from '../../../redux/actions/rooms'
import './CreateRoom.scss'



function CreateRoom(props) {
  const [category_id, setCategory_id] = useState("")
  const { Option } = Select;
  const history = useHistory();

function handleChange(value) {
  console.log(`selected ${value}`);
}
  const handleSubmit = event => {
   

      event.preventDefault();
      const formData = new FormData();
      
   formData.set('img',event.target.img.files[0]);
   formData.set('name',event.target.name.value);
   formData.set('history',event.target.history.value);
   formData.set('persons',event.target.persons.value);
   formData.set('time',event.target.time.value);
   formData.set('city',event.target.img.value);
   formData.set('category_id', category_id);  
      postRoom(formData)   
      .then(res => { 
          notification.success({message:'Room created'})
          setTimeout(() => {
              history.push('/admin')
          }, 2000);
      })
      .catch((error)=>{
          console.error(error)
      })
  }
  return (
      <div className="createRoom">
      <form action=""  className="formRoom" onSubmit={handleSubmit}>
     name: <Input type="text"  id="name"  name="name"/>
     history: <Input type="text"  id="history"  name="history"/>
     players: <Input type="text"  id="persons"  name="persons"/>
     time: <Input type="text"  id="time"  name="time"/>
     city: <Input type="text"  id="city"  name="city"/>
     category: <Select defaultValue="1" name="category_id" 
          value={category_id}
          onChange={(value)=>setCategory_id(value)}
           style={{ width: 120 }} >
            <Option value={1}>Horror</Option>
            <Option value={2}>Thriller</Option>
          </Select>


          <Input type="file"  id="imageInput"  name="img"/>
          <Button className="primaryButton" type="primary" htmlType="submit">
            Create room
          </Button>
            
                
              </form>
      </div>
  )
}

export default CreateRoom;

