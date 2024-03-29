import React, {useContext} from 'react';

import PropTypes from 'prop-types';

import { CityContext } from '../contexts/cityContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCloud,
         faBolt,
         faCloudRain,
         faCloudShowersHeavy,
         faSnowflake,
         faSun,
         faSmog
       }from '@fortawesome/free-solid-svg-icons';


const ForecastIcon = () => {

  const {
    mainDay1, mainDay2, mainDay3, mainDay4,
  } = useContext(CityContext);

  let thisIcon = null;

    if ((mainDay1 || mainDay2 || mainDay3 || mainDay4) === 'Thunderstorm') {
      thisIcon = <FontAwesomeIcon icon={faBolt} />;
    } else if ((mainDay1 || mainDay2 || mainDay3 || mainDay4)  === 'Drizzle') {
      thisIcon = <FontAwesomeIcon icon={faCloudRain} />;
    } else if ((mainDay1 || mainDay2 || mainDay3 || mainDay4) === 'Rain') {
      thisIcon = <FontAwesomeIcon icon={faCloudShowersHeavy} />;
    } else if ((mainDay1 || mainDay2 || mainDay3 || mainDay4) === 'Snow') {
      thisIcon = <FontAwesomeIcon icon={faSnowflake} />;
    } else if ((mainDay1 || mainDay2 || mainDay3 || mainDay4) === 'Clear') {
      thisIcon = <FontAwesomeIcon icon={faSun} />;
    } else if ((mainDay1 || mainDay2 || mainDay3 || mainDay4) === 'Clouds') {
      thisIcon = <FontAwesomeIcon icon={faCloud} />;
    } else {
      thisIcon = <FontAwesomeIcon icon={faSmog} />;
    }

  return(
    <div className="forecast-icon">
      {thisIcon}
    </div>
  )
}


export default ForecastIcon;

ForecastIcon.defaultProps = {
  mainDay1: '',
  mainDay2: '',
  mainDay3: '',
  mainDay4: '',
}
ForecastIcon.propTypes = {
  mainDay1: PropTypes.string.isRequired,
  mainDay2: PropTypes.string.isRequired,
  mainDay3: PropTypes.string.isRequired,
  mainDay4: PropTypes.string.isRequired,
}