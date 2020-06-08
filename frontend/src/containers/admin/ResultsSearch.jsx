import React, { useEffect, Fragment } from 'react'
import { connect } from 'react-redux';
import { useLocation, NavLink } from 'react-router-dom'
import { Button } from 'antd';
import {ArrowLeftOutlined } from '@ant-design/icons' 
import {useHistory} from 'react-router-dom'
import './ResultsSearch.scss'


import { SearchUsers, deleteUser, restoreUser } from '../../redux/actions/users';
import InSearch from './Search';

const CatSearch = ({users}) => {
    const history = useHistory();
    let location = useLocation();
    const search = location.pathname.replace('/usersearch/','')
    useEffect(() => {
        SearchUsers(search)
    }, [])
    

    if (users?.length <= 0) return <div className="notFound">
    <h2>No results</h2></div> 
    return (
<Fragment>

<NavLink to='/admin' activeClassName="isActive" exact><ArrowLeftOutlined /></NavLink>


    <div className="usersContain">
      
    { 
    users?.map(function(user) {
       

        const deleteUs = () => {
            deleteUser(user?.id)
            history.push('/admin') 
          }
         return ( 
     <div  className="users">
         <div className="userInfo">
         <img src={`http://localhost:8000/images/profile/${user?.image_path}`} alt=""/>
         <div className="userName">
     <p>{user.name}</p>
    <p>{user.email}</p>
    </div>
     </div>
     <div className="mail">

    </div>
    
    <Button className="secondButton" type="dashed" onClick={()=>deleteUs()}>Ban</Button>
    {       
             user.deleted_at ?
            <Button className="secondButton" type="dashed" onClick={()=>restoreUser(user.id)}>Restore</Button>: ''
          }
    </div> 
  
 
 
  )

            })
        }
           </div>

</Fragment>
)
}

const mapStateToProps = ({user}) =>({users:user?.userSearch});
export default connect(mapStateToProps)  (CatSearch);
