import React from 'react';

const CurrentLocationWrapper = (props) => {
  return (
    <div className="current-location-info">
      <h2 className="city-country-name">{props.city}, {props.country}</h2>
      <h4 className="current-date">{props.date}</h4>
      <p className="weather-description">{props.description}</p>
    </div>
  );
}

export default CurrentLocationWrapper;
