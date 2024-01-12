import { Recipe } from "./recipe.enum";

export interface User {
  id: string;
  username: string;
  password: string;
  favorites: Recipe[];
}