// src/components/RecipeList.jsx


import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  if (recipes.length === 0) {
    return <p className="text-gray-500">No recipes added yet.</p>;
  }

  return (
    <div className="space-y-4">
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className="border rounded-lg p-4 shadow-sm bg-white"
        >
          <h3 className="text-lg font-semibold">{recipe.title}</h3>
          <p className="text-gray-700">{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
