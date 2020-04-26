import React from 'react';
import ForecastIcon from '../../elements/forecast_icon';

const ForecastNextDaysWrapper = (props) => {
  return(
    <div className="forecast-days">
      <div className="forecast-day">
        <p className="day-name">{props.forecastDay1}</p>
        <div className="forecast-temp-icon">
          <h4 className="day-temp">{props.maxTempDay1}°</h4>
          <ForecastIcon
          dayIcon={props.forecastIcon}
          />
        </div>
      </div>
      <div className="forecast-day">
        <p className="day-name">{props.forecastDay2}</p>
        <div className="forecast-temp-icon">
          <h4 className="day-temp">{props.maxTempDay2}°</h4>
          <ForecastIcon
          dayIcon={props.forecastIcon}
          />
        </div>
      </div>
      <div className="forecast-day">
        <p className="day-name">{props.forecastDay3}</p>
        <div className="forecast-temp-icon">
          <h4 className="day-temp">{props.maxTempDay3}°</h4>
          <ForecastIcon
          dayIcon={props.forecastIcon}
          />
        </div>
      </div>
      <div className="forecast-day">
        <p className="day-name">{props.forecastDay4}</p>
        <div className="forecast-temp-icon">
          <h4 className="day-temp">{props.maxTempDay4}°</h4>
          <ForecastIcon
          dayIcon={props.forecastIcon}
          />
        </div>
      </div>
    </div>

  );
}

export default ForecastNextDaysWrapper;
