import React from 'react'
import Notes from './Notes'
import uuid from 'uuid'

const notes = [
    {
        id: uuid.v4(),
        task: 'Learn React'
    },
    {
        id: uuid.v4(),
        task: 'Do laundry'
    }
]

export default () =>
    <div>
        <button onClick={() => console.log('añadir nota')}>+</button>
        <Notes notes={notes}/>
    </div>