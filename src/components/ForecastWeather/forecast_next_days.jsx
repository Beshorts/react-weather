import React, {useContext} from 'react';

import PropTypes from 'prop-types';

import { CityContext } from '../../contexts/cityContext';

import ForecastIcon from '../../elements/forecast_icon';

const ForecastNextDaysWrapper = () => {

  const { 
    forecastDay1, 
    forecastDay2, 
    forecastDay3, 
    forecastDay4, 
    maxTempDay1, 
    maxTempDay2, 
    maxTempDay3, 
    maxTempDay4 
  } = useContext(CityContext);

  return(
    <div className="forecast-days">
      <div className="forecast-day">
        <p className="day-name">{forecastDay1}</p>
        <div className="forecast-temp-icon">
          <h4 className="day-temp">{maxTempDay1}°</h4>
          <ForecastIcon />
        </div>
      </div>
      <div className="forecast-day">
        <p className="day-name">{forecastDay2}</p>
        <div className="forecast-temp-icon">
          <h4 className="day-temp">{maxTempDay2}°</h4>
          <ForecastIcon />
        </div>
      </div>
      <div className="forecast-day">
        <p className="day-name">{forecastDay3}</p>
        <div className="forecast-temp-icon">
          <h4 className="day-temp">{maxTempDay3}°</h4>
          <ForecastIcon />
        </div>
      </div>
      <div className="forecast-day">
        <p className="day-name">{forecastDay4}</p>
        <div className="forecast-temp-icon">
          <h4 className="day-temp">{maxTempDay4}°</h4>
          <ForecastIcon />
        </div>
      </div>
    </div>

  );
}

export default ForecastNextDaysWrapper;

ForecastNextDaysWrapper.defaultProps  = {
  forecastDay1: "",
  forecastDay2: "",
  forecastDay3: "",
  forecastDay4: "",
  maxTempDay1: 0,
  maxTempDay2: 0,
  maxTempDay3: 0,
  maxTempDay4: 0,
}
ForecastNextDaysWrapper.propTypes  = {
    forecastDay1: PropTypes.string.isRequired,
    forecastDay2: PropTypes.string.isRequired,
    forecastDay3: PropTypes.string.isRequired,
    forecastDay4: PropTypes.string.isRequired,
    maxTempDay1: PropTypes.number.isRequired,
    maxTempDay2: PropTypes.number.isRequired,
    maxTempDay3: PropTypes.number.isRequired,
    maxTempDay4: PropTypes.number.isRequired,
}