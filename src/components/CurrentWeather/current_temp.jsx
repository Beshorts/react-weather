import React from 'react';

import Icon from '../../elements/icon';

const CurrentTempWrapper = (props) => {
  return(
    <div className="current-temp-info">
      <Icon
      newIcon={props.icon}
      />
      <div className="temp-text-wrapper">
      <h3 className="text-temp-info">now</h3>
      <h3 className="current-temp">{props.temperature}°</h3>
    </div>
    </div>
  );
}

export default CurrentTempWrapper;
