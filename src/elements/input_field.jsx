import React from 'react';

import PropTypes from 'prop-types';

const InputField = ({type, name, placeholder,value,handleChange, className, onKeyDown}) => {

  return (
    <div className="input-field">
    <input
      className={className}
      type={type}
      id={name}
      autoComplete={name}
      placeholder={placeholder}
      value={value}
      onKeyDown={onKeyDown}
      onChange={handleChange}
      required
      />
  </div>
  );
}

export default InputField;

InputField.defaultProps = {
  type: '',
  name: '',
  className: '',
  placeholder: '',
  value: '',
  handleChange: () => {},
  onKeyDown: () => {},
} 

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
}