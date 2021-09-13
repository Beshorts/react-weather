import React from 'react';

import PropTypes from 'prop-types';

import InputField from '../elements/input_field';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SearchBar = ({value, onChange, onKeyDown}) => {
  
    return(
      <div className="search-bar d-flex justify-content-center align-items-center container ">
        <div className=" search-bar-items">

<form className="form-inline ">

    <FontAwesomeIcon className="search-icon" icon="search"/>
      <InputField
        className="form-control "
        type="text"
        name="city"
        placeholder='search for a city '
        aria-label="Search"
        value={value}
        handleChange={onChange}
        onKeyDown={onKeyDown}
      />
    </form>
        </div>
      </div>
    )
  }

export default React.memo(SearchBar);

SearchBar.defaultProps = {
  value: '',
  onChange: () => {},
  onKeyDown: () => {},
}

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
}



