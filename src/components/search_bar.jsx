import React from 'react';
import InputField from '../elements/input_field';
import Button from '../elements/button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const SearchBar = (props) => {
    return(
      <div className="search-bar d-flex justify-content-center ">
        <div className=" search-bar-items">
          <InputField
            type="text"
            name="city"
            placeholder="enter a city"
            value={props.value}
            handleChange={props.onChangeHandler}
            error={props.error}
          />
          <div className="btn-action">
            <Button
              theme="primary search"
              type="submit"
              clicked={props.onClickHandler}>
              <FontAwesomeIcon className="search-icon" icon="search"/>
            </Button>
          </div>
        </div>
      </div>
    )
  }

export default SearchBar;






