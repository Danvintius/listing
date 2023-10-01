import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Listing } from './Listing'

export let list: any = {
  "Пункт": "1",
}

function App() {
  return (
    <div className="App">
      <p>Hello</p>
      <Listing />
    </div>
  );
}

export default App;
