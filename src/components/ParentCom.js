import React, { Component } from 'react'
import ChildCom from './ChildCom'

class ParentCom extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentName : 'parent'
        }
        this.heloParent = this.heloParent.bind(this)
    }

    heloParent(name){
        alert(`Hello ${this.state.parentName} from ${name}`)
    }
    
    render() {
        return (
            <div>
               <ChildCom handler = {this.heloParent}/>
            </div>
        )
    }
}

export default ParentCom
