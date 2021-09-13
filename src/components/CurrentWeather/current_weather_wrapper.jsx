import React from 'react';

import CurrentLocation from './current_location';
import CurrentTemp from './current_temp';
import CurrentDetails from './current_details';
import ImageWrapper from '../../elements/image_wrapper';
import CurrentSuntimes from './current_suntimes';
import ForecastNextDays from '../ForecastWeather/forecast_next_days';

const WeatherWrapper = () => (

  <main className="weather-wrapper">
    <section className="current-header-info">
      <CurrentLocation />
      <CurrentTemp />
    </section>
    <section className="details-and-imgage">
      <CurrentDetails />
      <ImageWrapper />
    </section>
    <section className="sundetails-and-forecast">
      <CurrentSuntimes />
      <ForecastNextDays />
    </section>
  </main>
);

export  default WeatherWrapper;
