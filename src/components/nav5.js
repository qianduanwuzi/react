import React, { Component } from 'react'
import {
    Link
  } from 'react-router-dom'
  import { Button } from 'antd';

class Home extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        // const list = [1,2,3,4].map(one => {
        //     return (
        //         <Fragment key={one}>
        //             {one}
        //         </Fragment>
        //     )
        // })
        const ThemeContext = React.createContext('light');
        function ThemedButton(props) {
            return (
              <ThemeContext.Consumer>
                {type => <Button {...props} type={type}>btn</Button>}
              </ThemeContext.Consumer>
            );
          }
        return (
            // Context 向下传递 value
            <ThemeContext.Provider value="primary">
                <div >
                this is nav5
                <ThemedButton />
                <Link to="/nav1">go to nav1</Link>
                </div>
            </ThemeContext.Provider>
        )
    }
}
export default Home