import React from 'react'

function NameList() {
    const names = ['Nazir', 'Alvi', 'kausar', 'Nishad']
    const nameList = names.map((x)=> <h2>{x}</h2>)
    return (
        <div>
            {nameList}
        </div>
    )
}

export default NameList
