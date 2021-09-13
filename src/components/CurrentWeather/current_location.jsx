import React, {useContext} from 'react';

import PropTypes from 'prop-types';

import { CityContext } from '../../contexts/cityContext';

const CurrentLocationWrapper = () => {

  const {city, country, date, description} = useContext(CityContext);
  
  return (
    <div className="current-location-info">
      <h1 className="city-country-name">{city}, {country}</h1>
      <h2 className="current-date">{date}</h2>
      <p className="weather-description">{description}</p>
    </div>
  );
}

export default CurrentLocationWrapper;

CurrentLocationWrapper.defaultProps = {
  city: "",
  country: "",
  date: "",
  description: "",

}
CurrentLocationWrapper.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,

}