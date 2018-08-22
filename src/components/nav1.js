import React, { Component } from 'react'
import { Button, Table, Divider, Tag } from 'antd'
import {
    HashRouter as Router,
    Route,
  } from 'react-router-dom'
  import Detail from './detail'
class Home extends Component {
    constructor(props) {
        super(props);
    }
    handleEdit =() => {
        // console.log(this)
        this.props.history.push('/nav1/1') 
    }
    render () {
        const columns = [{
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <a href="javascript:;">{text}</a>,
          }, {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
          }, {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
          }, {
            title: 'Tags',
            key: 'tags',
            dataIndex: 'tags',
            render: tags => (
              <span>
                {tags.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
              </span>
            ),
          }, {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
              <span>
                <a href="javascript:;">Invite {record.name}</a>
                <Divider type="vertical" />
                <Button onClick={this.handleEdit}>Edit</Button>
              </span>
            ),
          }];
          
          const data = [{
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
          }, {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
          }, {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
          }];
        return (
            <div>
                <Table columns={columns} dataSource={data} />
            </div>
        )
    }
}
export default Home