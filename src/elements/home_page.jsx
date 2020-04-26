import React from 'react';

import { ReactComponent as LandingPage } from '../svg/home.svg'

const HomePage = (props) => {
    return(
      <div className="landing-page ">
        <LandingPage />
        <div className="footer-text">
          <p>Weather React App - Openweathermap API - Vector designed by pch.vector/Freepik - modified by me.</p>
        </div>
      </div>
    );
}

export default HomePage;
