import React from 'react';

import PropTypes from 'prop-types';

import Button from '../elements/button';

const ErrorMessage = ({onClickHandler}) => {
  return(
    <div className="error-message">
      <div className="error-text">
        <h1>404</h1>
        <h2>Ooops something went wrong!</h2>
          <div className="btn-action">
           <Button
              theme="primary go-back"
              type="submit"
              clicked={onClickHandler}
            >
              try again
           </Button>
         </div>
      </div>
    </div>
  )
}

export default ErrorMessage;


ErrorMessage.propTypes = {
  onClickHandler: PropTypes.func.isRequired,
}