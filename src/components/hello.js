import React from 'react'

const   Hello = () => {
    // return(
    //     <div>
    //         <h2>Hello world</h2>
    //     </div>
    // )
    return React.createElement('div',{id:'helo-form',className:'test'},React.createElement('h1',null, 'hello World'))
}
export default Hello