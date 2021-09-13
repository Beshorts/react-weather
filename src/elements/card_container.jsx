import React from 'react';

import PropTypes from 'prop-types';

const CardContainer = ({children}) => {
  
  return(
   <div className="card-weather container">
     <div className="card-weather row " >
       <div className="board pr-0 pl-0 col-12">
         {children}
       </div>
     </div>
   </div>
  );
}

export default CardContainer;

CardContainer.propTypes = {
  children: PropTypes.object.isRequired,
}