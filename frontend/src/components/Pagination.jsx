import React from 'react';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import { List, Space } from 'antd';
import { Button } from 'antd';
import { deleteUser, restoreUser } from '../redux/actions/users';



const Pag = ({users}) => {
  if (!users) {return  <div id="preloader">
       <div id="loader"></div>  </div>

}
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
        <div className="userPag">
           
     
             
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
          
       
          {
            item.deleted_at ?
            <Button className="secondButton" type="dashed" onClick={()=>restoreUser(item.id)}>Restore</Button>: 
            <Button className="secondButton" type="dashed" onClick={()=>deleteUser(item.id)}>Ban</Button>
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

