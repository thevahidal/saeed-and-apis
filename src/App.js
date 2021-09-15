import { useState, useEffect } from 'react'
import axios from 'axios'

import SaeedInFolder from './saeed-in-folder/SaeedInFolder'
import './App.css';

function App() {
  const [counter, setCounter] = useState(0)
  const [showSaeedInFolder, setShowSaeedInFolder] = useState(false)
  const [instruments, setInstruments] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios.get(`https://api.social.pabla.ir/api/v1/instruments/`).then(res => {
      setInstruments(res.data.results)
      setLoading(false)
    })

  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Saeed and APIs.
        </p>
        <p>____________________________________</p>
        {loading ? 'Loading...' : null}
        {instruments.map(instrument => (<div style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: 25
        }}>
          <img 
            src={instrument.icon} 
            style={{
              width: 40,
              height: 40,
              marginRight: 20
            }}
          />
          {instrument.name}
        </div>))}
        <p>____________________________________</p>
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
