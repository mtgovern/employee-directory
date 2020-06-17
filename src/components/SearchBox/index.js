import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchBox(props) {
  return (
    <form className="search">
      <div className="form-group">
        {/* <label htmlFor="breed">Breed Name:</label> */}
        <input
          value={props.search}
          // onChange={props.handleInputChange}
          name="employee"
          type="text"
          className="form-control"
          placeholder="Search"
          id="employee"
        />
      </div>
    </form>
  );
}

export default SearchBox;
