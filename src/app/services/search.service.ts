import recipes from '../data/recipes';
import { Recipe } from '../interfaces/recipe.enum';

export async function searchRecipes(query: string): Promise<Recipe[]> {
  const lowercaseQuery = query.toLowerCase();
  return recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(lowercaseQuery) ||
    recipe.ingredients?.some(ingredient => ingredient.toLowerCase().includes(lowercaseQuery)) ||
    recipe.steps?.some(step => step.toLowerCase().includes(lowercaseQuery)) ||
    recipe.description?.toLowerCase().includes(lowercaseQuery) ||
    recipe.time?.toString().includes(lowercaseQuery)
  );
}

export async function getRecipeById(id: number): Promise<Recipe | undefined> {
  return recipes.find(recipe => recipe.id === id);
}

export async function getRecipesFromOpenAI(query: string, isSeason: boolean = false): Promise<Recipe[]> {
  const response = await fetch('/api/search', {
    method: 'POST',
    body: JSON.stringify({ search: query, isSeason })
  });

  const recipes = await response.json();
  const results = JSON.parse(recipes.content);

  return results.results;
}

export async function getRecipesForCalory(query: string): Promise<Recipe[]> {
  const response = await fetch('/api/calory-search', {
    method: 'POST',
    body: JSON.stringify({ search: query })
  });

  const recipes = await response.json();
  const results = JSON.parse(recipes.content);

  return results.recettes;
}
