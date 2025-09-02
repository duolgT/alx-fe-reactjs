// src/components/DeleteRecipeButton.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

export default function DeleteRecipeButton({ id }) {
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);
  const navigate = useNavigate();

  const handle = () => {
    // confirm and delete, then navigate home
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      deleteRecipe(id);
      navigate('/');
    }
  };

  return (
    <button onClick={handle} style={{ color: 'red', background: 'transparent', border: 'none' }}>
      Delete
    </button>
  );
}
