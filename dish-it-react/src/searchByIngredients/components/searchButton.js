import React from "react";



const SearchButton = ({ onSearchClick }) => {
    return (
        <button className="search-button" onClick={onSearchClick}>
            Search
        </button>
    );
};

export default SearchButton;
