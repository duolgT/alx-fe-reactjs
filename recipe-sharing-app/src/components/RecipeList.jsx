// src/components/RecipeList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import DeleteRecipeButton from './DeleteRecipeButton';
import { useRecipeStore } from './recipeStore';

export default function RecipeList() {
  const recipes = useRecipeStore((s) => s.recipes);

  if (!recipes || recipes.length === 0) {
    return <p>No recipes yet — add one!</p>;
  }

  return (
    <div>
      <h2>All Recipes</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {recipes.map((r) => (
          <li
            key={r.id}
            style={{
              border: '1px solid #ddd',
              padding: 12,
              marginBottom: 8,
              borderRadius: 6,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div>
              <Link to={`/recipes/${r.id}`} style={{ fontWeight: 'bold' }}>
                {r.title}
              </Link>
              <div style={{ color: '#555' }}>
                {r.description ? r.description : <small>No description</small>}
              </div>
            </div>

            <div style={{ display: 'flex', gap: 8 }}>
              <Link to={`/recipes/${r.id}/edit`} aria-label={`Edit ${r.title}`}>
                Edit
              </Link>

              <DeleteRecipeButton id={r.id} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
