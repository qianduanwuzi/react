import React, { Component } from 'react'
class Nav2 extends Component {
    constructor(props) {
        super(props);
        this.state={
            test:1,
            isTrue: false
        }
    }
    clickHandler = () =>{
        this.setState({test:2, isTrue: !this.state.isTrue},()=> {
            alert(this.state.test)
        })
    
      
       
    }
    render () {
        const {isTrue, test} = this.state
        return (
            <div onClick={this.clickHandler}>
               this is nav2 {isTrue? 1:2} {test}
            </div>
        )
    }
}
export default Nav2