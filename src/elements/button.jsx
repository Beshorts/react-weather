import React from 'react';

 // create reusable btn bootstrap component and customize it in scss file
const Button = (props) => {
  return(
    <button
      className={ "btn-" + props.theme}
      type={props.type}
      onClick={props.clicked} >{props.children}
    </button>
  )
}

export default Button;
