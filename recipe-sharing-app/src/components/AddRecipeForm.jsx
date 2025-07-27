import { useState } from 'react';
import { useRecipeStore } from '../store/recipeStore';

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
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }} autoComplete="off">
      <h2>Add a New Recipe</h2>
      <label htmlFor="recipe-title" style={{ display: 'block', marginBottom: '4px' }}>Title</label>
      <input
        id="recipe-title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        style={{ display: 'block', marginBottom: '10px', width: '100%', padding: '8px' }}
      />
      <label htmlFor="recipe-description" style={{ display: 'block', marginBottom: '4px' }}>Description</label>
      <textarea
        id="recipe-description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        style={{ display: 'block', marginBottom: '10px', width: '100%', padding: '8px' }}
      />
      <button type="submit" disabled={!title.trim() || !description.trim()}>Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;