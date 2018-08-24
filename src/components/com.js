import React, { Component } from 'react'
import {ThemeContext} from './themeContext'
class Com extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
      }
    componentWillReceiveProps(newProps) {
      }
    render () {
        const {name,type,  clickHandler} = this.props;
        return (
            <ThemeContext.Consumer>
                {theme => 
            <div onClick={clickHandler}>
                {name} {type} {this.context.color}--{theme}
            </div>
                }
            </ThemeContext.Consumer>
        )
    }
}
export default Com

// Com.contextTypes = {
//     color: React.PropTypes.string
//   };