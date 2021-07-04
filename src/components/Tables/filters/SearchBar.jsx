import React, { useRef } from "react";
import "./SearchBar.css";

const SearchBar = ({searchTerm, handleOnChange, check}) => {
    const inputRef = useRef("");

    const handleChange = () => {
        handleOnChange(inputRef.current.value);
    }
    
    const handleCheckClick = () => {
      if (check) {
        check();
      }
    }

  return (
    <div className="search">
      <input
        className="input-search"
        type="text"
        placeholder="Search..."
        ref={inputRef}
        value={searchTerm}
        onChange={handleChange}
        onFocus={handleCheckClick}
        onBlur={handleCheckClick
        
        
        }
      />
      <div className="go">GO</div>
    </div>
  );
};

export default SearchBar;
