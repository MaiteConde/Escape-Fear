import React, { useEffect, Fragment } from 'react'
import { connect } from 'react-redux';
import { useLocation, NavLink } from 'react-router-dom'
import { Button } from 'antd';
import {ArrowLeftOutlined } from '@ant-design/icons' 
import {useHistory} from 'react-router-dom'
import './ResultsSearch.scss'
import 'antd/dist/antd.css';
import { List, Space } from 'antd';
import { deleteUser, restoreUser, SearchUsers } from '../../../redux/actions/users';
import './ResultsSearch.scss'


  
  const Results = ({users}) => {
  const history = useHistory();
  
      let location = useLocation();
      const search = location.pathname.replace('/usersearch/','')
      useEffect(() => {
         SearchUsers(search)
       }, [])
       
       if (!users) {return  <div id="preloader">
       <div id="loader"></div>  </div>

}
       const id = users.map((user => user.id))
  const deleteUs = () => {
    deleteUser(id)
    history.push('/admin') 
  }

  const restoreUs = () => {
    restoreUser(id)
    history.push('/admin') 
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
             
             <NavLink to= '/admin'  activeClassName="isActive" exact>
                  <ArrowLeftOutlined />
                  </NavLink>
               
  <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: page => {
          console.log(page);
        },
        pageSize: 5,
      }}
      dataSource={listData}
  
      renderItem={item => (
        <List.Item
          key={item.name}
          
        
        >
            
            {item.name} <br/>
            {item.email}
            

            {console.log(item.id)}
            <br/>
           
         
            {
              item.deleted_at ?
              <Button className="secondButton" type="dashed" onClick={restoreUs}>Restore</Button>:  <Button className="secondButton" type="dashed" onClick={deleteUs}>Ban</Button>
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
  
  
  const mapStateToProps = ({user}) =>({users:user?.userSearch});
  export default connect(mapStateToProps)  (Results);
   