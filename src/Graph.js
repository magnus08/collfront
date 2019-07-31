import React, {useState, useEffect} from 'react';
import {sensorOne} from './fetch/urls';
import axios from 'axios';

export const Graph = function Graph() {

  const [values, setValues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect( () => {
    (async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios(sensorOne());
        setLoading(false);
        setValues(res.data)
      } catch (e) {
        console.log("Error: ", e);
        setError(e);
        setLoading(false);
      }
    })();
  }, []);

  if(loading) {
    return <div>Loading...</div>
  }

  if(error) {
    return <div>Could not retrieve sensor data</div>
  }

  const {temperature, humidity, pressure, timestamp} = values;
  return (
    <div>
      <span>Temperature: {temperature}</span>
      <span>Humidity: {humidity}</span>
      <span>Pressure: {pressure}</span>
      <span>Time: {timestamp}</span>
    </div>
  );
};
