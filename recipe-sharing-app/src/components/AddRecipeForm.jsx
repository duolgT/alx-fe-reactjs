// src/components/AddRecipeForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

export default function AddRecipeForm() {
  const addRecipe = useRecipeStore((s) => s.addRecipe);
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  // simple comma-separated ingredients and newline-separated steps
  const [ingredientsStr, setIngredientsStr] = useState('');
  const [stepsStr, setStepsStr] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const id = Date.now().toString(); // simple unique id
    const newRecipe = {
      id,
      title: title.trim(),
      description: description.trim(),
      ingredients: ingredientsStr
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean),
      steps: stepsStr
        .split('\n')
        .map((s) => s.trim())
        .filter(Boolean),
    };

    addRecipe(newRecipe);
    // navigate to the new recipe's details page
    navigate(`/recipes/${id}`);
    // clear form
    setTitle('');
    setDescription('');
    setIngredientsStr('');
    setStepsStr('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 24 }}>
      <h2>Add New Recipe</h2>

      <div>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{ width: '100%', padding: 8, marginBottom: 8 }}
        />
      </div>

      <div>
        <textarea
          placeholder="Short description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
          style={{ width: '100%', padding: 8, marginBottom: 8 }}
        />
      </div>

      <div>
        <input
          placeholder="Ingredients (comma separated)"
          value={ingredientsStr}
          onChange={(e) => setIngredientsStr(e.target.value)}
          style={{ width: '100%', padding: 8, marginBottom: 8 }}
        />
      </div>

      <div>
        <textarea
          placeholder="Steps (one per line)"
          value={stepsStr}
          onChange={(e) => setStepsStr(e.target.value)}
          rows={4}
          style={{ width: '100%', padding: 8, marginBottom: 8 }}
        />
      </div>

      <button type="submit" style={{ padding: '8px 12px' }}>
        Add Recipe
      </button>
    </form>
  );
}
