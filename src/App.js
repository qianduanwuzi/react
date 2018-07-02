// export default BasicExample

import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import logo from './logo.svg';
// 引入 homejs
import './App.css';
import Home from './portal/index';
import Nav1 from './components/nav1';
import Nav2 from './components/nav2';
import Nav3 from './components/nav3';

class App extends Component {
  componentDidMount() {
      // alert(1)
  }

  componentWillMount() {
    // alert(2)
  }

  componentDidUpdate() {
    // alert(3)
       // <Route path="/nav1" component={Nav1}/>
        // <Route path="/nav2" component={Nav2}/>
        // <Route path="/nav3" component={Nav3}/>
  }
  render() {
    console.log(this)
    return (
        <Router>
          <div className="out_container">
            <Route  path="/" component={Home}/>
          </div> 
        </Router>
    );
  }
}
export default App;