import { useRecipeStore } from "./recipeStore";

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );

  return (
    <div>
      <h2 className="text-xl font-bold">Recommended for You</h2>
      <button
        onClick={generateRecommendations}
        className="bg-blue-500 text-white px-2 py-1 rounded mb-2"
      >
        Refresh Recommendations
      </button>
      {recommendations.length === 0 ? (
        <p>No recommendations yet. Add some favorites first!</p>
      ) : (
        recommendations.map((recipe) => (
          <div key={recipe.id} className="border p-2 rounded mb-2">
            <h3 className="font-semibold">{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecommendationsList;
