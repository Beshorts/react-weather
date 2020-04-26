import React from 'react';

const CardContainer = (props) => {
  return(
   <div className="card-weather container-fluid">
     <div className="card-weather row">
       <div className="board pr-0 pl-0 col-sm-3 col-md-12 col-lg-12 col-xl-12 ">
         {props.children}
       </div>
     </div>
   </div>
  );
}

export default CardContainer;
