import { useState } from 'react'
import Entry from './Components/Entry'
import './App.css'
import emojipedia from './assets/emojipedia'

function CreateEntry (data) {
  return (
    <Entry 
          emoji = {data.emoji}
          name= {data.name}
          description= {data.meaning}
    />
  )
}


function App() {

  return (
    <>
    <div>
      <div id='Heading'>
        <h1>
          <span>Emojipedia</span>
        </h1>
      </div>

      <div>
      <dl className='dictionary'> {emojipedia.map(CreateEntry)}  </dl>

      </div>
    </div>
      
    </>
  )
}

export default App
