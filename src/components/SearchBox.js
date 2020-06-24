import React from 'react';

const SearchBox = (props) => {
  return (
    <div className="container m-4">
      <form>
        <input
          type="search"
          className="form-control"
          placeholder={props.placeholder}
          onChange={props.handleChange}
          value={props.value}
        />
      </form>
    </div>
  );
};

export default SearchBox;
