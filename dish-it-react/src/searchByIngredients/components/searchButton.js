import React from "react";
import { useNavigate } from "react-router-dom";

const SearchButton = ({ ingredients }) => {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    if (ingredients.length === 0) {
      alert("Please add some ingredients.");
      return;
    }

    const query = ingredients.join(",");
    navigate(
      `/searchByIngredientsResults?ingredients=${encodeURIComponent(query)}`
    );
  };

  return (
    <button className="search-button" onClick={handleSearchClick}>
      <img id="search-icon" src="/images/search-icon.png" alt="search icon" />
    </button>
  );
};

export default SearchButton;
