

import React, { Component } from 'react'

class Message extends Component{

    constructor(){
        super()
        this.state = {
            message: 'This is set state'
        }
    }

    changeMessage() {
        this.setState({
            message: 'Why you clicked'
        })
    }

    render(){
    return(
        <div>
             <h1>{this.state.message}</h1>
             <button onClick ={ () => this.changeMessage()}>Don't Click </button>
        </div>
    )
    }
}

export default Message