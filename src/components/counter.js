import React, { Component } from 'react'

class counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    increment() {
        this.setState({
            count: this.state.count + 1
        })
    }


    render() {
        return ( <
            div >
            <
            div >


            </div> 
            <button>onClick = {
                () => this.increment()
            }  Increment </button> 
            <button>onClick = {
                () => this.increment()
            }  Increment </button>llo
            </div>
        )
    }
}



export default counter