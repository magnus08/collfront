import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Graph} from './Graph';
import {Sensor} from './Sensor';
import {Image} from './Image';
import { Grid } from 'semantic-ui-react'

function App() {
  const [selected, setSelected] = useState({component: Sensor});

  const Component = selected && selected.component;
    return (
	  <div class="ui divided six column grid">
	    <div class="row">
	      <div class="column">
                <button onClick={() => setSelected({component: Image, props: {}})}>Last image</button>
	      </div>
	      <div class="column">
                <button>List images</button>
	      </div>
	      <div class="column">
                <button onClick={() => setSelected({component: Sensor})}>Sensor reading</button>
	      </div>
	      <div class="column">
                <button onClick={() => setSelected({component: Graph, props: {minutes: 60*24}})}>Graph last day</button>
	      </div>
	      <div class="column">
                <button onClick={() => setSelected({component: Graph, props: {minutes: 60}})}>Graph last hour</button>
	      </div>
	    </div>
            {Component && <Component {...selected.props}/>}
	  </div>
  );
}

export default App;
