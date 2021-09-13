import React, {useContext} from 'react';

import PropTypes from 'prop-types';

import { CityContext } from '../contexts/cityContext';

import { ReactComponent as WAutumn } from '../svg/w_autumn.svg';
import { ReactComponent as WSpring } from '../svg/w_spring.svg';
import { ReactComponent as WWinter } from '../svg/w_winter.svg';
import { ReactComponent as WSummer } from '../svg/w_summer.svg';
import { ReactComponent as WStorm } from '../svg/w_storm.svg';
import { ReactComponent as WRain } from '../svg/w_rain.svg';
import { ReactComponent as HomePage } from '../svg/home.svg';

const ImageWrapper = () => {

   const {main, temperature} = useContext(CityContext);
 

  let imageComponent = null;

      if ( main === null) {
      imageComponent = <HomePage /> ;
      } else if ( main === 'Snow') {
        imageComponent = <WWinter />;
      } else if ( main === 'Thunderstorm') {
        imageComponent = <WStorm />;
      } else if ( main === 'Rain' ) {
        imageComponent = <WRain />;
      } else if ( main === 'Drizzle' ) {
        imageComponent = <WRain />;
      } else if ( ( main === 'Clear' || 'Clouds' ) && (temperature < 15) ) {
        imageComponent = <WWinter />;
      } else if ( ( main === 'Clear' || 'Clouds' ) && ( temperature >= 15 ) && (temperature < 20)) {
        imageComponent = <WAutumn />;
      } else if ( ( main === 'Clear' || 'Clouds' ) && ( temperature >= 20 ) && (temperature < 30)) {
        imageComponent = <WSpring />;
      } else if ( main === 'Clear' && temperature >= 30) {
        imageComponent = <WSummer />;
      }

  return (
    <div className="image-weather">
      {imageComponent}
    </div>
  )
}


export default ImageWrapper;

ImageWrapper.defaultProps = {
  main: '',
  temperature: 0,
} 

ImageWrapper.propTypes = {
  main: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
}