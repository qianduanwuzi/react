import React, { Component } from 'react'
import {
    HashRouter as Router,
    Route,
  } from 'react-router-dom'
  import Detail from './detail'
  import Nav1 from './nav1'
class Home extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div>
                <Route path="/nav1/:id"  component={Detail}/>
                <Route path="/nav1" exact component={Nav1}></Route>
            </div>
        )
    }
}
export default Home