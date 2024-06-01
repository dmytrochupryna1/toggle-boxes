import Box from './components/Box'
import boxes from './boxes.js'
import { useState } from 'react'

function App() {
  
  const [boxesState, setBoxesState] = useState(boxes) // set the boxes state to the boxes array
  
  function toggle(id) {
    setBoxesState(prevBoxesState => {
      return prevBoxesState.map(box => {
        return box.id === id ? {...box, on: !box.on} : box
      })
    })
  }
  
  const boxesElements = boxesState.map(box => { // map over the boxes array
    return <Box 
              key={box.id}
              on={box.on}
              toggle={() => toggle(box.id)}
    />
  })
  return (
    <>
      {boxesElements}
    </>
  )
}

export default App
