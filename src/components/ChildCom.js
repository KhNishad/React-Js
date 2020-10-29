import React from 'react'

function childCom(props) {
    return (
        <div>
            <button onClick = {() => props.handler('chlid')} >Click</button>
        </div>
    )
}

export default childCom
