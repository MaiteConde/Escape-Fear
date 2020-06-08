import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';

import { Table, Tag, Space } from 'antd';
import { deleteUser } from '../../redux/actions/users';

const { Column, ColumnGroup } = Table;


const data = [
    {
       
    key: '1',
    firstName: 'John',
    lastName: 'Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    firstName: 'Jim',
    lastName: 'Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
const TableUsers = (users) => {
  
    return (
        <Table dataSource={data}>
          <ColumnGroup title="Name">
            <Column title="name" dataIndex="name" key="name" />           
          </ColumnGroup>
          <Column title="Email" dataIndex="email" key="email" />
        
            title="Action"
            key="action"
            render={(text, record) => (
              <Space size="middle">
                <button onClick={deleteUser()}></button>
              </Space>
            )}
          />
        </Table>)
}


const mapStateToProps = ({user}) =>({users: user?.users});
export default connect(mapStateToProps)  (TableUsers);