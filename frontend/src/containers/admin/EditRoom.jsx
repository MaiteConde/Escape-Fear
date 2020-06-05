import React from 'react';
import 'antd/dist/antd.css';
import { notification } from 'antd';
import { Form, Input, Button, Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import { editRoom } from '../../redux/actions/rooms';

export default function Edit(props) {
    const id = props.match.params.id

    const onFinish = (room) => {
      editRoom(room, id) 
    .then(res => {
        notification.success({ message: 'Edited successfully', description: 'Nice!'})
    setTimeout(() => {
        props.history.push('')
    }, 2000);
})      
.catch(err =>{
    notification.error({ message: 'Error'})
    setTimeout(() => {
        props.history.push('/');
        console.error(err)})
    }, 2000);}
      const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };
    return (
        <div className="login">
           
        <Form className="form"{...layout}  
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
             <h1 >Edit Room</h1>
          <Form.Item
            label="name"
            name="name"
            rules={[
             
            ]}
          >
            <Input />
          </Form.Item>
    
          <Form.Item
            label="history"
            name="history"
            rules={[
           
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="time"
            name="time"
            rules={[
           
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="time"
            name="time"
            rules={[
           
            ]}
          >
            <Input />
          </Form.Item>
    
          <Form.Item {...tailLayout}>
            <Button  htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        
        </Form>
        
        </div>
      );
}


const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
