// src/components/EditRecipeForm.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

export default function EditRecipeForm() {
  const { id } = useParams();
  const recipe = useRecipeStore((s) => s.recipes.find((r) => r.id === id));
  const updateRecipe = useRecipeStore((s) => s.updateRecipe);
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredientsStr, setIngredientsStr] = useState('');
  const [stepsStr, setStepsStr] = useState('');

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title || '');
      setDescription(recipe.description || '');
      setIngredientsStr((recipe.ingredients || []).join(', '));
      setStepsStr((recipe.steps || []).join('\n'));
    }
  }, [recipe]);

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe({
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
    });
    navigate(`/recipes/${id}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Recipe</h2>

      <div>
        <input value={title} onChange={(e) => setTitle(e.target.value)} required style={{ width: '100%', padding: 8, marginBottom: 8 }} />
      </div>

      <div>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={3} style={{ width: '100%', padding: 8, marginBottom: 8 }} />
      </div>

      <div>
        <input value={ingredientsStr} onChange={(e) => setIngredientsStr(e.target.value)} placeholder="Ingredients (comma separated)" style={{ width: '100%', padding: 8, marginBottom: 8 }} />
      </div>

      <div>
        <textarea value={stepsStr} onChange={(e) => setStepsStr(e.target.value)} rows={4} placeholder="One step per line" style={{ width: '100%', padding: 8, marginBottom: 8 }} />
      </div>

      <button type="submit" style={{ padding: '8px 12px' }}>
        Save Changes
      </button>
    </form>
  );
}
