// src/components/recipeStore.js
import { create } from "zustand";

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: "",
  filteredRecipes: [],

  // Actions
  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, { ...recipe, id: Date.now() }],
      filteredRecipes: [...state.recipes, { ...recipe, id: Date.now() }],
    })),

  updateRecipe: (updatedRecipe) =>
    set((state) => {
      const updatedRecipes = state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      );
      return {
        recipes: updatedRecipes,
        filteredRecipes: updatedRecipes.filter((recipe) =>
          recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
      };
    }),

  deleteRecipe: (id) =>
    set((state) => {
      const updatedRecipes = state.recipes.filter((recipe) => recipe.id !== id);
      return {
        recipes: updatedRecipes,
        filteredRecipes: updatedRecipes.filter((recipe) =>
          recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
      };
    }),

  setSearchTerm: (term) =>
    set((state) => {
      const filtered = state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      );
      return { searchTerm: term, filteredRecipes: filtered };
    }),
}));
