import { useState } from "react";
import { useRecipeStore } from "./recipeStore";

const EditRecipeForm = ({ recipe }) => {
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);
  const editRecipe = useRecipeStore((state) => state.editRecipe);

  const handleSubmit = (event) => {
    event.preventDefault(); // ✅ Prevent page reload
    editRecipe(recipe.id, { title, description });
    alert("Recipe updated successfully!");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mb-4">
      <h2 className="text-lg font-semibold">Edit Recipe</h2>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Recipe title"
        className="w-full border rounded p-2"
        required
      />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Recipe description"
        className="w-full border rounded p-2"
        required
      />

      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Save Changes
      </button>
    </form>
  );
};

export default EditRecipeForm;
