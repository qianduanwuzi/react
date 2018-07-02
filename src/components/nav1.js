import React, { Component } from 'react'
import { Button } from 'antd'
import {
    Link
  } from 'react-router-dom'
class Home extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div>
               this is nav1
               <Button type="primary">Button</Button>
               <Link to="/nav3">go to nav3</Link>
            </div>
        )
    }
}
export default Home