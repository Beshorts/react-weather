import React from 'react';

import PropTypes from 'prop-types';


 // create reusable btn bootstrap component and customize it in scss file
const Button = ({theme, type, clicked, children}) => {

  return(
    <button
      className={ "btn-" + theme}
      type={type}
      onClick={clicked} 
    >
      {children}
    </button>
  )
}

export default Button;


Button.defaultProps = {
  theme: "primary",
  type: "action",
  clicked: () => {},
  children: "btn text",
}
Button.propTypes = {
  theme: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  clicked: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
}