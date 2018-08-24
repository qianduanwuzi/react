import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import Com from "./com";
// const ThemeContext = React.createContext("light");
import {ThemeContext} from './themeContext'

class Nav5 extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }
  componentDidMount() {
    console.log("12", this.props.type);
  }
  componentWillReceiveProps(newProps) {
    console.log("15", this.props);
  }
  clickCom() {
    alert("click");
  }
  focusTextInput = () => {
    this.textInput.current.focus();
  }
  getChildContext() {
    return {color: "purple"};
  }
  render() {
    // const list = [1,2,3,4].map(one => {
    //     return (
    //         <Fragment key={one}>
    //             {one}
    //         </Fragment>
    //     )
    // })
    function ThemedButton(props) {
      return (
        <ThemeContext.Consumer>
          {type => (
            <Button {...props} type={type}>
              btn
            </Button>
          )}
        </ThemeContext.Consumer>
      );
    }
    return (
      // Context 向下传递 value
      <React.Fragment>
      <ThemeContext.Provider value="primary">
        <div>
          this is nav5
          <ThemedButton />
          <Link to="/nav1">go to nav1</Link>
          <ThemeContext.Consumer>
            {type => (
              <Com name="testcom" type={type} clickHandler={this.clickCom} />
            )}
          </ThemeContext.Consumer>
        </div>
        <input type="text" ref={this.textInput} />
        <input type="button" value="Focus the text input" onClick={this.focusTextInput}/>
      </ThemeContext.Provider>
      </React.Fragment>
    );
  }
}
export default Nav5;

