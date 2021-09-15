import { useState, useEffect } from 'react'
import axios from 'axios'

import SaeedInFolder from './saeed-in-folder/SaeedInFolder'
import './App.css';

function App() {
  const [counter, setCounter] = useState(0)
  const [showSaeedInFolder, setShowSaeedInFolder] = useState(false)

  useEffect(() => {
    // console.log('Component did mount')
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Saeed and APIs.
        </p>
        {showSaeedInFolder && <SaeedInFolder />}
        <button
          onClick={() => {
            setShowSaeedInFolder(!showSaeedInFolder)
          }}
        >{showSaeedInFolder ? 'Hide' : 'Show'} SaeedInFolder</button>
        <p>____________________________________</p>
        {counter}
        <button
          onClick={() => {
            setCounter(counter + 1)
          }}
        >
          Increment
        </button>
      </header>
    </div>
  );
}

export default App;
