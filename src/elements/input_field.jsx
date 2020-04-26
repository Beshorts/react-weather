import React from 'react';

const InputField = (props) => {
    return (
        <div className="input-field">
          <input
            type={props.type}
            id={props.name}
            name={props.name}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.handleChange}
            required
            />
        </div>
    );
}

export default InputField;
