// src/components/SearchBar.jsx
import React from "react";
import { useRecipeStore } from "./recipeStore";

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search recipes..."
        className="border p-2 w-full rounded"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
