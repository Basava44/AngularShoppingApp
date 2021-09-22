import { Injectable } from "@angular/core";
import { Ingrediants } from "../shared/ingrediants.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
  constructor(private shoppingListService: ShoppingListService) {}

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome',
      'https://assets.bonappetit.com/photos/57ae1afd53e63daf11a4e26f/1:1/w_2560%2Cc_limit/chicken-schnitzel.jpg',
      [new Ingrediants('Meat', 1), new Ingrediants('French Fries', 20)]
    ),
    new Recipe(
      'Big Fat Burger',
      'What else you need to say?',
      'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/mbtg1wsd3zdqu3v3rpgd',
      [new Ingrediants('Breads', 2), new Ingrediants('eat', 2)]
    ),
    new Recipe(
      'Egg Rice',
      'Karnataka Special',
      'https://i.ytimg.com/vi/ti6Vv7flBF4/maxresdefault.jpg',
      [
        new Ingrediants('rice bowl', 1),
        new Ingrediants('Egg', 2),
        new Ingrediants('Onion', 1),
        new Ingrediants('Lemon',1)
      ]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingrediants[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}