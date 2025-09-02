import { useRecipeStore } from "./recipeStore";

const FavoritesList = () => {
  const favorites = useRecipeStore((state) =>
    state.favorites
      .map((id) => state.recipes.find((recipe) => recipe.id === id))
      .filter(Boolean) // removes nulls in case recipe not found
  );
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  return (
    <div>
      <h2 className="text-xl font-bold">My Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorite recipes yet.</p>
      ) : (
        favorites.map((recipe) => (
          <div key={recipe.id} className="border p-2 rounded mb-2">
            <h3 className="font-semibold">{recipe.title}</h3>
            <p>{recipe.description}</p>
            <button
              onClick={() => removeFavorite(recipe.id)}
              className="bg-red-500 text-white px-2 py-1 rounded mt-1"
            >
              Remove from Favorites
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesList;
