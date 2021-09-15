import { useState } from 'react'
import axios from 'axios'

import SaeedInFolder from './saeed-in-folder/SaeedInFolder'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Saeed and APIs.
        </p>
        <SaeedInFolder />
      </header>
    </div>
  );
}

export default App;
