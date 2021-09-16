import { useState, useEffect } from 'react'
import axios from 'axios'

import { pagesMapping, RoutingContext } from './Routing'
import SaeedInFolder from './saeed-in-folder/SaeedInFolder'
import './App.css';

const Home = () => {
  const [counter, setCounter] = useState(0)
  const [showSaeedInFolder, setShowSaeedInFolder] = useState(false)
  const [instruments, setInstruments] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    setLoading(true)
    axios.get(`https://api.social.pabla.ir/api/v1/instruments/?search=${searchQuery}`).then(res => {
      setInstruments(res.data.results)
      setLoading(false)
    })
  }, [searchQuery])

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Saeed and APIs. <span>Home</span>
        </p>
        <p>____________________________________</p>
        <input 
          placeholder='Type to Search...'
          style={{
            marginBottom: 20,
            padding: '15px 25px',
            borderRadius: 20,
            border: 'none',
            fontSize: 20,
          }}
          onChange={(e) => {
            setSearchQuery(e.target.value)
          }}
        />
        {!loading ? instruments.map(instrument => (<div style={{
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
        </div>)) : <div>Loading...</div>}
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

export default Home;
