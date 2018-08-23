import React, { Component } from 'react'
import { Input } from 'antd';
import {
    Link
  } from 'react-router-dom'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            val: '',
        }
    }
    render () {
        const {val} = this.state
        return (
            <div>
            {val}
                <Input placeholder="Basic usage" value={val} onChange={e => this.setState({val: e.target.value})} />,
               this is nav4
               <Link to="/nav1">go to nav1</Link>
            </div>
        )
    }
}
export default Home