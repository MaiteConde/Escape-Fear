import React, { Fragment } from 'react';
import 'antd/dist/antd.css';
import { NavLink } from 'react-router-dom'
import { notification } from 'antd';
import { Form, Input, Button } from 'antd';
import { editRoom, roomid } from '../../redux/actions/rooms';
import {ArrowLeftOutlined } from '@ant-design/icons' 
import ModalRoom from './ModalRoom';



export default function Edit(props) {
    const id = props.match.params.id
    roomid(id)
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
      <Fragment>

        <div className="login">
          
                <NavLink to= '/admin'  activeClassName="isActive" exact>
                  <ArrowLeftOutlined />
                  </NavLink>
        <Form className="form"{...layout}  
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >

             <h1 >Edit Room</h1>
                  
             <ModalRoom />
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
            label="image_path"
            name="image_path"
            rules={[
           
            ]}
          >
            <Input />
          </Form.Item>
          
         
         

          <Form.Item {...tailLayout}>
            <Button className="secondButton" type="dashed"  htmlType="submit">
              Submit
            </Button>
          </Form.Item>

         
        </Form>
        
        </div>
      

        </Fragment>
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
