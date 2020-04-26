import React from 'react';

import Button from '../elements/button';

const ErrorMessage = (props) => {
  return(
    <div className="error-message">
    <div className="error-text">
    <h1>404</h1>
     <h2>Ooops something went wrong!</h2>
     <p>Please try again</p>
     <div className="btn-action">
         <Button
            theme="primary go-back"
            type="submit"
            clicked={props.onClickHandler}>back
         </Button>
         </div>
      </div>
    </div>
  )
}

export default ErrorMessage;
