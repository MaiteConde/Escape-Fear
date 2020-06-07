import React from 'react';
import 'antd/dist/antd.css';
import './Register.scss'
import { notification } from 'antd';
import {Form,Input,Tooltip,Button} from 'antd';
import { register } from '../../../redux/actions/users';
import { Link } from 'react-router-dom';


const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const Register = (props) => {
 
  const [form] = Form.useForm();

  const onFinish = (user) => {
    if (user.password !== user.confirm) {
        return notification.error({ message: 'Error', description: 'Passwords do not match' })
    }
   
    register(user)
        .then(res => {
            notification.success({ message: 'Welcome ', description: 'Succesfully registered'})
            setTimeout(() => props.history.push('/login') , 2000);
        })
        .catch(err => console.error(err))
  }



  return (
    <div className="register">
    <Form className="form" {...formItemLayout} form={form} name="register" onFinish={onFinish}  scrollToFirstError>
    <h2 >Register</h2>
      <Form.Item name="email" label="Email"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item name="password" label="Password" rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback >
        <Input.Password />
      </Form.Item>

      <Form.Item name="confirm"  label="Confirm Password"  dependencies={['password']}  hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject('The two passwords that you entered do not match!');
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="name"
        label={
          <span>
            Name&nbsp;
            <Tooltip title="What do you want others to call you?">
            </Tooltip>
          </span>
        }
        rules={[
          {
            required: true,
            message: 'Please input your name!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button className="primaryButton" type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
      <span className="redirección">Already an account?  <Link to='login'>Log in</Link></span>
    </Form>
    </div>
  );
};

export default Register