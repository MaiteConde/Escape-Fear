import React from 'react';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import { List, Space } from 'antd';
import { Button } from 'antd';
import { deleteUser, restoreUser } from '../redux/actions/users';



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
    id: user?.id,
    deleted_at: user?.deleted_at
        
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
         
          {item.name} <br/>
          {item.email}
          <br/>
          <Button className="secondButton" type="dashed" onClick={()=>deleteUser(item.id)}>Ban</Button>
       
          {
            item.deleted_at ?
            <Button className="secondButton" type="dashed" onClick={()=>restoreUser(item.id)}>Restore</Button>: ''
          }


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

