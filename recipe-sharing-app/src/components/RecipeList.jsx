// src/components/RecipeList.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Recipe List</h2>
      {recipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        <ul className="space-y-2">
          {recipes.map((recipe) => (
            <li
              key={recipe.id}
              className="border p-3 rounded hover:bg-gray-100 transition"
            >
              <Link to={`/recipe/${recipe.id}`} className="text-blue-600">
                {recipe.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeList;
