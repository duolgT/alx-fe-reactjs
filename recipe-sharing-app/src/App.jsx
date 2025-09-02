// src/App.jsx


import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl space-y-6">
        <h1 className="text-2xl font-bold text-center text-green-700">
          My Recipe App
        </h1>

        {/* Add new recipe */}
        <AddRecipeForm />

        {/* List of recipes */}
        <RecipeList />
      </div>
    </div>
  );
}

export default App;
