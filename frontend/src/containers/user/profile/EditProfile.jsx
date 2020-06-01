import React from 'react';
import 'antd/dist/antd.css';
import { notification } from 'antd';
import { Form, Input, Button, Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import './Profile.scss'
import { editProfile } from '../../../redux/actions/users';

export default function Edit(props) {
    const onFinish = (user,img) => {
      editProfile(user)
    .then(res => {
        notification.success({ message: 'Connected successfully', description: 'Welcome'})
    setTimeout(() => {
        props.history.push('')
    }, 2000);
})      
.catch(err =>{
    notification.error({ message: 'Failed connection', description: 'Incorrect User or Password'})
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
             <h1 >Edit Profile</h1>
          <Form.Item
            label="email"
            name="email"
            rules={[
             
            ]}
          >
            <Input />
          </Form.Item>
    
          <Form.Item
            label="name"
            name="name"
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

