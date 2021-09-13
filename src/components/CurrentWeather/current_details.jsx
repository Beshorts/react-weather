import React, {useContext} from 'react';

import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { CityContext } from '../../contexts/cityContext';
import { 
  faThermometerQuarter, 
  faThermometerThreeQuarters, 
  faTint, 
  faCloud, 
  faWind 
} from '@fortawesome/free-solid-svg-icons';

const CurrentDetailsWrapper = () => {

  const { temp_min, temp_max, humidity, cloudiness, wind } = useContext(CityContext);

  return (
    <div className="current-details-info">
      <div className="min-tem">
        <div className="value-and-icon">
          <FontAwesomeIcon icon={faThermometerQuarter} />
          <h4 className="value-elem">{temp_min}°</h4>
        </div>
        <p>min. temp.</p>
      </div>
      <div className="max-tem">
        <div className="value-and-icon">
          <FontAwesomeIcon icon={faThermometerThreeQuarters} />
          <h4 className="value-elem">{temp_max}°</h4>
        </div>
        <p>max. temp.</p>
      </div>
      <div className="humidity">
        <div className="value-and-icon">
          <FontAwesomeIcon icon={faTint} />
          <h4 className="value-elem">{humidity}%</h4>
        </div>
        <p>humidity</p>
      </div>
      <div className="cloudiness">
        <div className="value-and-icon">
          <FontAwesomeIcon icon={faCloud} />
          <h4 className="value-elem">{cloudiness}%</h4>
        </div>
        <p>cloudiness</p>
      </div>
      <div className="wind">
        <div className="value-and-icon">
          <FontAwesomeIcon icon={faWind} />
          <h4 className="value-elem">{wind} km/h</h4>
        </div>
        <p>wind speed</p>
      </div>
    </div>
  );
}
export default CurrentDetailsWrapper;

CurrentDetailsWrapper.defaultProps = {
  temp_min: 0,
  temp_max: 0,
  humidity: 0,
  cloudiness: 0,
  wind: 0
}

CurrentDetailsWrapper.propTypes = {
  temp_min: PropTypes.number.isRequired,
  temp_max: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  cloudiness: PropTypes.number.isRequired,
  wind: PropTypes.number.isRequired,
}
