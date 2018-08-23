import React, { Component } from 'react'
import {
    Link
  } from 'react-router-dom'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDetail: false
        }
    }
    render () {
        const {isDetail} = this.state
        const message = [1,2,3,4,5]
        function Mailbox(props) {
            const messages = props.message
            return  (
                <div>
                    {messages.length && <h2>you have {messages.length} messages</h2>   }
                </div> 
            )
        }
        return (
            <div>
            {isDetail? <h1>this is detail page</h1> : <h1>this is not detail page</h1>}
               this is nav3
               <Mailbox message={message} />
               <Link to="/nav1">go to nav1</Link>
            </div>
        )
    }
}
export default Home