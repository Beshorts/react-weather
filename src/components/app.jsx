import React, { useState } from 'react';

import PropTypes from 'prop-types';

import '../styles/_index.scss';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import { FadeLoader } from 'react-spinners';

import SearchBar from './search_bar';
import CardContainer from '../elements/card_container';
import CurrentWeatherWrapper from './CurrentWeather/current_weather_wrapper';
import HomePage from '../elements/home_page';
import ErrorMessage from './error_message';

import { CityContext } from '../contexts/cityContext';

import { useFetchWeather } from '../utils/hooks';

// import fontawesome library
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSearch,
         faCloud,
         faBolt,
         faCloudRain,
         faCloudShowersHeavy,
         faSnowflake,
         faSun,
         faSmog,
         faThermometerQuarter,
         faThermometerThreeQuarters,
         faTint,
         faArrowUp,
         faArrowDown
        }from '@fortawesome/free-solid-svg-icons'

library.add(fab,
            faSearch,
            faCloud,
            faBolt,
            faCloudRain,
            faCloudShowersHeavy,
            faSnowflake,
            faSun,
            faSmog,
            faThermometerQuarter,
            faThermometerThreeQuarters,
            faTint,
            faArrowUp,
            faArrowDown
          )


const App = () => {
  console.log('app')
    // initial state of searchBar input
    const [searchBarInput, setSearchBarInput] = useState('');
    // fetch Api using custom hook and destructuring it
    const {currentWeather, loading, error, fetchApi} = useFetchWeather(searchBarInput);
    

    // Update state with current search bar input
    const searchBarHandler = (e) => {
     e.preventDefault();
      setSearchBarInput(e.target.value)
    }

  const handleSearchSubmit = (event) => {
    if ( event.keyCode === 13 && searchBarInput !== '') {
      event.preventDefault();
      setSearchBarInput(event.target.value);
      fetchApi();
    }
  }

    // Reset weather info and update state on click btn on page error
   const  goBackHandler = () => {
    console.log("seacrBarHandler")
      setSearchBarInput('');
    }

     // logic to render card container contents
    let container;
   
    if  (loading === true) {
      container = <div className="spinner">
                    <div className="spinner-icon">
                      <FadeLoader color="white" />
                    </div>
                  </div>
    } else if (error === true) {
      container = <ErrorMessage  onClickHandler={goBackHandler} />;
    } else if (currentWeather !== undefined) {
      container = <CurrentWeatherWrapper />
    }  else {
      container = <HomePage />;
    }

    // show context name in tree component
    CityContext.displayName = 'CityContext'

  // for this project I created a simple router
    return (
      <div className="app container-fluid ">
      <Router>
      <SearchBar
          value={searchBarInput}
          onChange={searchBarHandler}
          onKeyDown={handleSearchSubmit}
        />
        <Switch>
        <CityContext.Provider value={currentWeather}>
          <Route path='/'>
            <CardContainer>
             {container}
            </CardContainer>
          </Route>
        </CityContext.Provider>
        </Switch>
        </Router>
      </div>
    );
  
}
export default App;

App.defaultProps = {
  currentWeather: {
    city: "",
    cloudiness: 0,
    date: "",
    country: "",
    description: "",
    forecastDay1:"",
    forecastDay2:"",
    forecastDay3:"",
    forecastDay4:"",
    humidity: 0,
    main: "",
    mainDay1: "",
    mainDay2: "",
    mainDay3: "",
    mainDay4: "",
    maxTempDay1: 0,
    maxTempDay2: 0,
    maxTempDay3: 0,
    maxTempDay4: 0,
    sunrise: "",
    sunset: "",
    temp_max: 0,
    temp_min: 0,
    temperature: 0,
    wind: 0,
  },
  loading: false,
  error: false,
  fetchApi: () => {},

}
App.propTypes = {
  currentWeather: PropTypes.shape({
    city: PropTypes.string.isRequired,
    cloudiness: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    forecastDay1: PropTypes.string.isRequired,
    forecastDay2: PropTypes.string.isRequired,
    forecastDay3: PropTypes.string.isRequired,
    forecastDay4: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    main: PropTypes.string.isRequired,
    mainDay1: PropTypes.string.isRequired,
    mainDay2: PropTypes.string.isRequired,
    mainDay3: PropTypes.string.isRequired,
    mainDay4: PropTypes.string.isRequired,
    maxTempDay1: PropTypes.number.isRequired,
    maxTempDay2: PropTypes.number.isRequired,
    maxTempDay3: PropTypes.number.isRequired,
    maxTempDay4: PropTypes.number.isRequired,
    sunrise: PropTypes.string.isRequired,
    sunset: PropTypes.string.isRequired,
    temp_max: PropTypes.number.isRequired,
    temp_min: PropTypes.number.isRequired,
    temperature: PropTypes.number.isRequired,
    wind: PropTypes.number.isRequired,
  }),
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  fetchApi: PropTypes.func.isRequired,

}

