import React, { Fragment } from 'react'
import { Input } from 'antd';
import {useHistory} from 'react-router-dom'
// import './Search.scss'


const { Search } = Input;
const InSearch = () => {
    const history = useHistory();
    function handleChange(e) {
      if(e.key==='Enter'){
          const search =e.target.value;
          history.push('/usersearch/'+search);
      }
    }
    return (
        <Fragment>
             {/* <h2>Search your location</h2> */}
        <div className="containersearch">
        <div className="search">
         <Search  onKeyUp={handleChange} className="busca"
      placeholder="Find a user"
    //   enterButton="Search"
      size="large"
      onSearch={value => console.log(value)}
    />
        </div>
        </div>
        </Fragment>
    )
}
export default InSearch;