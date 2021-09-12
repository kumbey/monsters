import React from "react";

import "./styles.css";

export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    autoFocus
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
);
