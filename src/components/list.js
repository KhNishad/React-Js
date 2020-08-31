import React from 'react'

function List() {
    const persons = [
        {
            name : 'jhon',
            age : 20
        },
        {
            name: 'jhon cina ',
            age: 21
        },
        {
            name: 'jhon cina cina',
            age: 22
        },
        
    ];

    const personList  = persons.map(person => <person person={person}/>)
    return  <div>{personList}</div>
    
}

export default List
