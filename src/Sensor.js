import React, {useState, useEffect} from 'react';
import {sensorOne} from './fetch/urls';
import axios from 'axios';

const rnd = (v) => v?v.toFixed(1):"-";

export const Sensor = function Sensor() {

  const [values, setValues] = useState({});
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
	<>
	    <div class="row">
	      <div class="six wide column">
            <span>Temperature: {rnd(temperature)}</span>
              </div>
  	    </div>
	    <div class="row">
	      <div class="six wide column">
               <span>Humidity: {rnd(humidity)}</span>
              </div>
  	    </div>
	    <div class="row">
	      <div class="six wide column">
            <span>Pressure: {rnd(pressure)}</span>
              </div>
  	    </div>
	    <div class="row">
	      <div class="six wide column">
            <span>Time: {timestamp}</span>
              </div>
  	    </div>
    </>
  );
};
