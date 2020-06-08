import React from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';
import './Contact.scss'

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not validate email!',
    number: '${label} is not a validate number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const Contact = () => {
  const onFinish = values => {
    console.log(values);
  };

  return (
    <div className="formCon">
    <h2>Contact us:</h2>
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item
        name={['user', 'name']}
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'email']}
        label="Email"
        rules={[
          {
            type: 'email',
          },
        ]}
      >
        <Input />
      </Form.Item>
      

      <Form.Item name={['user', 'introduction']} label="Message">
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button className="primaryButton" type="primary" htmlType="submit">
          Send
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
};

export default Contact;