import React, { useState, useEffect } from "react";
import recipesData from "./data.json"; // Local JSON data

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipesData);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-5">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        🍳 Delicious Recipes
      </h1>

      {/* Responsive Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white shadow-md rounded-xl overflow-hidden transform transition duration-300 hover:shadow-xl hover:scale-105"
          >
            {/* Recipe Image */}
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />

            {/* Recipe Content */}
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-800">
                {recipe.title}
              </h2>
              <p className="text-gray-600 mt-2">{recipe.description}</p>

              <button className="mt-4 w-full bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition-colors">
                View Recipe
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
