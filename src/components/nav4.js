import React, { Component } from 'react'
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
               this is nav4
               <Link to="/nav1">go to nav1</Link>
            </div>
        )
    }
}
export default Home