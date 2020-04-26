import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThermometerQuarter, faThermometerThreeQuarters, faTint, faCloud, faWind } from '@fortawesome/free-solid-svg-icons';

const CurrentDetailsWrapper = (props) => {
  return (
    <div className="current-details-info">
      <div className="min-tem">
        <div className="value-and-icon">
          <FontAwesomeIcon icon={faThermometerQuarter} />
          <h4 className="value-elem">{props.temp_min}°</h4>
        </div>
        <p>min. temp.</p>
      </div>
      <div className="max-tem">
        <div className="value-and-icon">
          <FontAwesomeIcon icon={faThermometerThreeQuarters} />
          <h4 className="value-elem">{props.temp_max}°</h4>
        </div>
        <p>max. temp.</p>
      </div>
       <div className="humidity">
        <div className="value-and-icon">
          <FontAwesomeIcon icon={faTint} />
          <h4 className="value-elem">{props.humidity}%</h4>
        </div>
        <p>humidity</p>
      </div>
       <div className="cloudiness">
        <div className="value-and-icon">
          <FontAwesomeIcon icon={faCloud} />
          <h4 className="value-elem">{props.cloudiness}%</h4>
        </div>
        <p>cloudiness</p>
      </div>
       <div className="wind">
        <div className="value-and-icon">
          <FontAwesomeIcon icon={faWind} />
          <h4 className="value-elem">{props.wind} km/h</h4>
        </div>
        <p>wind speed</p>
      </div>
    </div>
  );
}
export default CurrentDetailsWrapper;
