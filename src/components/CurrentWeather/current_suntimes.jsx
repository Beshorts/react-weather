import React, {useContext} from 'react';

import PropTypes from 'prop-types';

import { CityContext } from '../../contexts/cityContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun,
         faArrowUp,
         faArrowDown
       }from '@fortawesome/free-solid-svg-icons';

const CurrentSuntimes = () => {

  const { sunrise, sunset } = useContext(CityContext);

  return(
    <div className="sun-times">
      <div className="sun-details-a">
        <h3 className="sun-time">{sunrise} am
        </h3>
        <div className="sun-icon">
          <FontAwesomeIcon icon={faSun} />
          <FontAwesomeIcon icon={faArrowUp} />
          <p className="sun-text">sunrise
          </p>
        </div>
      </div>
      <div className="sun-details-b">
        <h3 className="sun-time">{sunset} pm
        </h3>
        <div className="sun-icon">
          <FontAwesomeIcon icon={faSun} />
          <FontAwesomeIcon icon={faArrowDown} />
          <p className="sun-text">sunset
          </p>
        </div>
      </div>
    </div>
  )
}

export default CurrentSuntimes;

CurrentSuntimes.defaultProps = {
  sunset: "",
  sunrise: "",
}
CurrentSuntimes.propTypes = {
  sunset: PropTypes.string.isRequired,
  sunrise: PropTypes.string.isRequired,
}