import { useAuth } from "../authContext";
import { getRecipeById } from "./search.service";
import users from "../data/users";

export const addToFavorites = async (userId: string, recipeId: number): Promise<void> => {
  const currentUser = users.find((user) => user.id === userId);
  const recipe = await getRecipeById(recipeId);

  if (currentUser) {
    if (!recipe) {
      throw new Error('Recipe not found');
    }

    console.log(currentUser);
    currentUser.favorites.push(recipe);
    console.log(currentUser);
    localStorage.setItem('user', JSON.stringify(currentUser));

  } else {
    console.error('User not found');
  }
};

export const removeFromFavorites = async (userId: string, recipeId: number): Promise<void> => {
  const currentUser = users.find((user) => user.id === userId);

  if (currentUser) {
    currentUser.favorites = currentUser.favorites.filter((favorite) => favorite.id !== recipeId);
    localStorage.setItem('user', JSON.stringify(currentUser));
  } else {
    console.error('User not found');
  }
}