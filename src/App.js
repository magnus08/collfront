import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Graph} from './Graph';
import {Sensor} from './Sensor';

function App() {
  const [selected, setSelected] = useState({component: Sensor});

  const Component = selected && selected.component;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button>Last image</button>
        <button>List images</button>
        <button onClick={() => setSelected({component: Sensor})}>Sensor reading</button>
        <button onClick={() => setSelected({component: Graph, props: {minutes: 60*24}})}>Graph last day</button>
        <button onClick={() => setSelected({component: Graph, props: {minutes: 60}})}>Graph last hour</button>
      </header>
      {Component && <Component/>}
    </div>
  );
}

export default App;
