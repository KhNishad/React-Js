// functional component exp

import React from 'react'
// function Greet() {
//     return <h1>Hello Nishad</h1> 

// }

// arrow function
const Greet = (props) => {
    console.log(props)

    return ( <div >
        
        <h1 > Hello { props.name } </h1> <h1>  { props.children } </h1>

        </div>
    )
}
export default Greet;