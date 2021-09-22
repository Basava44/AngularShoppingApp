import { Ingrediants } from '../shared/ingrediants.model';

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingrediants[];

  constructor(
    name: string,
    description: string,
    imagePath: string,
    ingredients: Ingrediants[]
  ) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}
