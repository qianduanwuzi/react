// export default BasicExample

import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
// 引入 homejs
import './App.css';
import Home from './portal/index';
import Login from './components/login'
// import Nav1 from './components/nav1';
// import Nav2 from './components/nav2';
// import Nav3 from './components/nav3';
// import Nav4 from './components/nav4';
// import Nav5 from './components/nav5';

class App extends Component {
  componentDidMount() {
      // alert(1)
  }

  componentWillMount() {
    // alert(2)
  }

  componentDidUpdate() {
    // alert(3)
  }

  componentWillReceiveProps(newProps) {
    // console.log(newProps.location.pathname != '')
    // this.props.history.replace('/login') // replace 直接替换记录  push 是添加一条记录
    // this.props.history.push('/path') 
    // this.props.match.params.xxx
  }

  render() {
    console.log(this)
    return (
        <Router>
          <div className="out_container">
            <Switch> 
              <Route  path="/login" component={Login}/>
              <Route  path="/"  component={Home}/>
            </Switch> 
          </div> 
        </Router>
    );
  }
}
export default App;