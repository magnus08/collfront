import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Graph} from './Graph';
import {Sensor} from './Sensor';
import {Image} from './Image';

function App() {
  const [selected, setSelected] = useState({component: Sensor});

  const Component = selected && selected.component;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => setSelected({component: Image, props: {}})}>Last image</button>
        <button>List images</button>
        <button onClick={() => setSelected({component: Sensor})}>Sensor reading</button>
        <button onClick={() => setSelected({component: Graph, props: {minutes: 60*24}})}>Graph last day</button>
        <button onClick={() => setSelected({component: Graph, props: {minutes: 60}})}>Graph last hour</button>
      </header>
      {Component && <Component {...selected.props}/>}
    </div>
  );
}

export default App;
