// src/components/RecipeDetails.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import DeleteRecipeButton from './DeleteRecipeButton';
import { useRecipeStore } from './recipeStore';

export default function RecipeDetails() {
  const { id } = useParams();
  const recipe = useRecipeStore((s) => s.recipes.find((r) => r.id === id));

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found.</p>
        <Link to="/">Back to list</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      <h3>Ingredients</h3>
      {recipe.ingredients && recipe.ingredients.length ? (
        <ul>
          {recipe.ingredients.map((ing, i) => (
            <li key={i}>{ing}</li>
          ))}
        </ul>
      ) : (
        <p><small>No ingredients provided.</small></p>
      )}

      <h3>Steps</h3>
      {recipe.steps && recipe.steps.length ? (
        <ol>
          {recipe.steps.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      ) : (
        <p><small>No steps provided.</small></p>
      )}

      <div style={{ marginTop: 12 }}>
        <Link to={`/recipes/${id}/edit`} style={{ marginRight: 12 }}>
          Edit Recipe
        </Link>
        <DeleteRecipeButton id={id} />
      </div>

      <div style={{ marginTop: 16 }}>
        <Link to="/">← Back to all recipes</Link>
      </div>
    </div>
  );
}
