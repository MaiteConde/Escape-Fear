import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import { List, Avatar, Space } from 'antd';
import { Button } from 'antd';
import { deleteUser } from '../redux/actions/users';



const IconText = ({ icon, text }) => (
    
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const Pag = ({users}) => {
    const listData = [];
    users.map((user => 
    listData.push({
   
    name: user?.name,
    email: user?.email,
    id: user?.id
        
      })
    )) 
  
    return (
        <div>
           
     
             
<List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: page => {
        console.log(page);
      },
      pageSize: 2,
    }}
    dataSource={listData}

    renderItem={item => (
      <List.Item
        key={item.name}
        
      
      >
          <h2>Users:</h2>
          {item.name} <br/>
          {item.email}
          <br/>
          <Button onClick={()=>deleteUser(item.id)}>Delete</Button>
        <List.Item.Meta
          name={item.name}
          email={item.email}
          id={item.id}
        />
   
      </List.Item>
    )}
  />
  
  </div>
    )
}
const mapStateToProps = ({ user}) =>({users: user?.users});
export default connect(mapStateToProps)  (Pag);

