import React from 'react';

function Greet (props){
return (
    <div>
            <h1>Learning react with {props.name} and {props.code}</h1>
            {props.children}

    </div>
)
}

export default Greet