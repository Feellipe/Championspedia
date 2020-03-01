import React from "react";
import "./search-box-styles.css";

export const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <div className="">
      <input
        className="search-box__input"
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};
