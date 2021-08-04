import React from 'react'
import Notes from './Notes'

export default () =>
    <div>
        <button onClick={() => console.log('añadir nota')}>+</button>
        <Notes />
    </div>