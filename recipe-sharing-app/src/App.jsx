// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';

function Home() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
      <div>
        <AddRecipeForm />
      </div>
      <div>
        <RecipeList />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div style={{ maxWidth: 900, margin: '24px auto', padding: '0 16px' }}>
        <header style={{ marginBottom: 24 }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <h1>Recipe Sharing App</h1>
          </Link>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes/:id" element={<RecipeDetails />} />
            <Route path="/recipes/:id/edit" element={<EditRecipeForm />} />
            {/* add more routes as needed */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}
