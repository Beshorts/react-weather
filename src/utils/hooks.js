import React, {useState} from 'react';

import { weatherDataFields } from './functions';

export const useFetchWeather = (value) => {

    const [currentWeather, setCurrentWeather] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    
    // variables storing api key stored in .env file
    const APIkey = process.env.REACT_APP_WEATHER_API_KEY;
    const weather = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${APIkey}&units=metric`;
    const forecast = `https://api.openweathermap.org/data/2.5/forecast?q=${value}&appid=${APIkey}&units=metric`;


    const fetchApi = () => {
      setLoading(true)
      // start to fetch if value is passed to searchBarInput
      Promise.all([fetch(weather), fetch(forecast)])
      .then(([res1, res2]) => {
        if (res1.status && res2.status === 200) {
        return Promise.all([res1.json(), res2.json()])
        } else {
          return setError(true);
        }
      })
      .then(([data1, data2]) => {
        // fill custom fields with data responses
         const getCustomFields = weatherDataFields(data1, data2);
        // if city exists, update current weather details
        if (data1.cod === 200 && data2.cod === "200") {
          // store response data in custom fields
          setCurrentWeather(getCustomFields);
          setLoading(false)
          setError(false);
        } else if (data1.status === 404) {
          setError(true)
        }
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });

    }
    return {
        currentWeather,
        loading,
        error,
        fetchApi,
    }
}