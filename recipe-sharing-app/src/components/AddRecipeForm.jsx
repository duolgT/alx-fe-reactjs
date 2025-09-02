// src/components/AddRecipeForm.jsx


import { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title.trim() || !description.trim()) return;

    addRecipe({
      id: Date.now(),
      title,
      description,
    });

    setTitle('');
    setDescription('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-3 border p-4 rounded-lg shadow-sm bg-gray-50"
    >
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Recipe Title"
        className="w-full border rounded p-2"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Recipe Description"
        className="w-full border rounded p-2"
        rows="3"
        required
      />
      <button
        type="submit"
        className="px-4 py-2 bg-green-600 text-white rounded-md"
      >
        Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
