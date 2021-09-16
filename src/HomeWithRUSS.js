import { useEffect } from 'react'
import useSetState from 'react-use-setstate'
import axios from 'axios'

import SaeedInFolder from './saeed-in-folder/SaeedInFolder'
import './App.css';

const HomeWithRUSS = () => {
  const [state, setState] = useSetState({
      counter: 0,
      showSaeedInFolder: false,
      instruments: [],
      loading: true,
      searchQuery: '',
  })

  useEffect(() => {
    setState({loading: true})
    axios.get(`https://api.social.pabla.ir/api/v1/instruments/?search=${state.searchQuery}`)
        .then(res => {
            setState({instruments: res.data.results, loading: false})
        })
  }, [state.searchQuery])

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Saeed and APIs. <span>Home With RUSS</span>
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
            setState({searchQuery: e.target.value})
          }}
        />
        {!state.loading ? state.instruments.map(instrument => (<div style={{
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
        {state.showSaeedInFolder && <SaeedInFolder />}
        <button
          onClick={() => {
            setState({showSaeedInFolder: !state.showSaeedInFolder})
          }}
        >{state.showSaeedInFolder ? 'Hide' : 'Show'} SaeedInFolder</button>
        <p>____________________________________</p>
        {state.counter}
        <button
          onClick={() => {
            setState(prevState => ({counter: prevState.counter + 1}))
          }}
        >
          Increment
        </button>
      </header>
    </div>
  );
}

export default HomeWithRUSS;
