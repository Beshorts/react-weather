import React, {useContext} from 'react';

import { CityContext } from '../../contexts/cityContext';

import Icon from '../../elements/icon';
import { PropTypes } from 'prop-types';

const CurrentTempWrapper = () => {
  
  const { temperature } = useContext(CityContext);
  return(
    <div className="current-temp-info">
      <Icon />
      <div className="temp-text-wrapper">
        <h3 className="text-temp-info">now</h3>
        <h3 className="current-temp">{temperature}°</h3>
      </div>
    </div>
  );
}

export default CurrentTempWrapper;

CurrentTempWrapper.defaultProps = {
  temperature: 0,
}
CurrentTempWrapper.propTypes = {
  temperature: PropTypes.number.isRequired
}