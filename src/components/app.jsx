import React, { Component } from 'react';
import '../styles/_index.scss';

import SearchBar from './search_bar';

import CardContainer from '../elements/card_container';
import CurrentWeatherWrapper from './CurrentWeather/current_weather_wrapper';
import HomePage from '../elements/home_page';
import ErrorMessage from './error_message';

// import fontawesome library
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSearch, faCloud, faBolt, faCloudRain, faCloudShowersHeavy, faSnowflake, faSun, faSmog, faThermometerQuarter, faThermometerThreeQuarters, faTint, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faSearch, faCloud, faBolt, faCloudRain, faCloudShowersHeavy, faSnowflake, faSun, faSmog, faThermometerQuarter, faThermometerThreeQuarters, faTint, faArrowUp, faArrowDown)


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    searchBarInput: '',
    currentWeather: null,
    loading: false,
    error: false,
   };
  }


    // Update state with current search bar input
    searchBarHandler = (e) => {
      this.setState({
        searchBarInput: e.target.value
      })
    }

    // Reset weather info and update state
    goBackHandler = () => {
      this.setState({
        searchBarInput: '',
        currentWeather: null,
        error: false,
      })
    }

    // fetch current weather and update state
    setWeather = () => {
      const city = this.state.searchBarInput;

    // create variable for api key stored in .env file
      const APIkey = process.env.REACT_APP_WEATHER_API_KEY;
      const weather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`;
      const forecast = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIkey}&units=metric`;

      this.setState({
        currentWeather: {},
        loading: true,
        error: false,
      }, () => {
        // executed as callback function
        Promise.all([fetch(weather), fetch(forecast)])
        .then(([res1, res2]) => {
          return Promise.all([res1.json(), res2.json()])
        })
        .then(([data1, data2]) => {
          // create variable to custom current weather results
          const months = ['Jan.','Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sept.', 'Oct.', 'Nov.','Dec.'];
          const days = ['Sun,', 'Mon,', 'Tues', 'Wed,', 'Thurs,', 'Fri,', 'Sat,'];
          const currentDate = new Date();
          const date = `${days[currentDate.getDay()]} ${currentDate.getDate()} ${months[currentDate.getMonth()]} ${currentDate.getFullYear()}`;

          // create variable to custom forecast  results
          const forecastStamp = data2.list;
          const nextDays = forecastStamp.filter(elem => (elem.dt_txt).includes("15:00:00"));
          const fourNextDays = nextDays.slice(Math.max(nextDays.length -5, 1))
          const day1= fourNextDays[0].dt_txt
          const day2= fourNextDays[1].dt_txt
          const day3= fourNextDays[2].dt_txt
          const day4= fourNextDays[3].dt_txt

          // if city exists, update current weather details
          if (data1.cod === 200) {
            this.setState({
             currentWeather: {
                city: data1.name,
                country: data1.sys.country,
                date,
                main: data1.weather[0].main,
                description: data1.weather[0].description,
                temperature: Math.round(data1.main.temp),
                temp_min: Math.round(data1.main.temp_min),
                temp_max: Math.round(data1.main.temp_max),
                humidity: data1.main.humidity,
                cloudiness: data1.clouds.all,
                wind: Math.round(data1.wind.speed * 3.6),
                sunrise: new Date(data1.sys.sunrise * 1000).toLocaleTimeString().slice(0, 5),
                sunset: new Date(data1.sys.sunset * 1000).toLocaleTimeString().slice(0, 5),
                forecastDay1: new Date(day1).toLocaleString("en-US", {weekday: "long"}),
                forecastDay2: new Date(day2).toLocaleString("en-US", {weekday: "long"}),
                forecastDay3: new Date(day3).toLocaleString("en-US", {weekday: "long"}),
                forecastDay4: new Date(day4).toLocaleString("en-US", {weekday: "long"}),
                maxTempDay1: Math.round(fourNextDays[0].main.temp_max),
                maxTempDay2: Math.round(fourNextDays[1].main.temp_max),
                maxTempDay3: Math.round(fourNextDays[2].main.temp_max),
                maxTempDay4: Math.round(fourNextDays[3].main.temp_max),
                mainDay1: fourNextDays[0].weather[0].main,
                mainDay2: fourNextDays[1].weather[0].main,
                mainDay3: fourNextDays[2].weather[0].main,
                mainDay4: fourNextDays[3].weather[0].main,
                },
              loading: false
            });
          } else {
            // if city doesn't exist, throw error
            throw data1.cod
          }
        })
        .catch(err => {
          console.log(err);
          this.setState({
            loading: false,
            error: true,
          });
        });
      });
    }


  render() {
    // set render card contents
      let container = null;
    if (this.state.currentWeather === null) {
      container = <HomePage />;
    } else if (this.state.error) {
      container = <ErrorMessage  onClickHandler={this.goBackHandler} />;
    } else if (this.currentWeather !== null) {
      container = <CurrentWeatherWrapper data={this.state.currentWeather} />;
    }

    return (
      <div className="app container-fluid ">
        <SearchBar
        value={this.state.searchBarInput}
        onChangeHandler={this.searchBarHandler}
        onClickHandler={this.setWeather}
        error={this.state.error}
        />
        <CardContainer>
        {container}
        </CardContainer>
      </div>
    );
  }
}
export default App;




