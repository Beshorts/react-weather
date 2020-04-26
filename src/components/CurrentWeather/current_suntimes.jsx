import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun,
         faArrowUp,
         faArrowDown
       }from '@fortawesome/free-solid-svg-icons';

const CurrentSuntimes = (props) => {
  return(
    <div className="sun-times">
      <div className="sun-details-a">
        <h3 className="sun-time">{props.sunrise}am
        </h3>
        <div className="sun-icon">
          <FontAwesomeIcon icon={faSun} />
          <FontAwesomeIcon icon={faArrowUp} />
          <p className="sun-text">sunrise
          </p>
        </div>
      </div>
      <div className="sun-details-b">
        <h3 className="sun-time">{props.sunset}pm
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
