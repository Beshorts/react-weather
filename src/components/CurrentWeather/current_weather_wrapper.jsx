import React from 'react';

import CurrentLocation from './current_location';
import CurrentTemp from './current_temp';
import CurrentDetails from './current_details';
import ImageWrapper from '../../elements/image_wrapper';
import CurrentSuntimes from './current_suntimes';
import ForecastNextDays from '../ForecastWeather/forecast_next_days';

const WeatherWrapper = (props) => {
  return (
    <div className="weather-wrapper">
      <div className="current-header-info">
      <CurrentLocation
      city={props.data.city}
      country={props.data.country}
      date={props.data.date}
      description={props.data.description}
      />
      <CurrentTemp
      icon={props.data}
      temperature={props.data.temperature}
      />
      </div>
      <div className="details-and-imgage">
      <CurrentDetails
      temp_min={props.data.temp_min}
      temp_max={props.data.temp_max}
      humidity={props.data.humidity}
      cloudiness={props.data.cloudiness}
      wind={props.data.wind}
      />
      <ImageWrapper
      currentImage={props.data}
      />
      </div>
      <div className="sundetails-and-forecast">
      <CurrentSuntimes
      sunrise={props.data.sunrise}
      sunset={props.data.sunset}
      />
      <ForecastNextDays
      forecastDay1={props.data.forecastDay1}
      maxTempDay1={props.data.maxTempDay1}
      forecastDay2={props.data.forecastDay2}
      maxTempDay2={props.data.maxTempDay2}
      forecastDay3={props.data.forecastDay3}
      maxTempDay3={props.data.maxTempDay3}
      forecastDay4={props.data.forecastDay4}
      maxTempDay4={props.data.maxTempDay4}
      forecastIcon={props.data}
      />
      </div>
    </div>
  )
}

export  default WeatherWrapper;
