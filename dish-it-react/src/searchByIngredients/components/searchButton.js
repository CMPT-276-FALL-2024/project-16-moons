import React from "react";

const SearchButton = ({ onSearchClick }) => {
    return (
        <button className="search-button-1" onClick={onSearchClick}>
            Search
        </button>
    );
};

export default SearchButton;
