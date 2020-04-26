import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud, faBolt, faCloudRain, faCloudShowersHeavy, faSnowflake, faSun, faSmog } from '@fortawesome/free-solid-svg-icons'

const Icon = ( {newIcon} ) => {

  const {
    main,
  } = newIcon;

  let currentIcon = null;

    if (main === 'Thunderstorm') {
      currentIcon = <FontAwesomeIcon icon={faBolt} />;
    } else if (main === 'Drizzle') {
      currentIcon = <FontAwesomeIcon icon={faCloudRain} />;
    } else if (main === 'Rain') {
      currentIcon = <FontAwesomeIcon icon={faCloudShowersHeavy} />;
    } else if (main === 'Snow') {
      currentIcon = <FontAwesomeIcon icon={faSnowflake} />;
    } else if (main === 'Clear') {
      currentIcon = <FontAwesomeIcon icon={faSun} />;
    } else if (main === 'Clouds') {
      currentIcon = <FontAwesomeIcon icon={faCloud} />;
    } else {
      currentIcon = <FontAwesomeIcon icon={faSmog} />;
    }

  return(
    <div className="current-icon">
    {currentIcon}
    </div>
  )
}


export default Icon;
