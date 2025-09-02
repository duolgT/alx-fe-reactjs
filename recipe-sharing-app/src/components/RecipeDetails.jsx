import { useParams } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === parseInt(id))
  );

  if (!recipe) {
    return <p>Recipe not found</p>;
  }

  return (
    <div className="p-4 border rounded shadow-md">
      <h1 className="text-2xl font-bold mb-2">{recipe.title}</h1>
      <p className="mb-4">{recipe.description}</p>
      <p className="text-sm text-gray-600 mb-4">Recipe ID: {recipe.id}</p>

      {/* Render Edit and Delete functionality */}
      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton recipeId={recipe.id} />
    </div>
  );
};

export default RecipeDetails;
