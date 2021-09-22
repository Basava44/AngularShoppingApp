import { Subject } from "rxjs";
import { Ingrediants } from "../shared/ingrediants.model";

export class ShoppingListService {
  ingrediantsChanged = new Subject<Ingrediants[]>();
  startedEditing = new Subject<number>();

  private ingrediants: Ingrediants[] = [
    new Ingrediants('Apples', 5),
    new Ingrediants('Tomato', 10),
    new Ingrediants('Chilli', 20),
  ];

  getIngrediants() {
    return this.ingrediants.slice();
  }

  getIngrediant(index: number) {
    return this.ingrediants[index];
  }

  addIngrediant(ingrediant: Ingrediants) {
    this.ingrediants.push(ingrediant);
    this.ingrediantsChanged.next(this.ingrediants.slice());
  }

  addIngredients(ingredients: Ingrediants[]) {
    this.ingrediants.push(...ingredients);
    this.ingrediantsChanged.next(this.ingrediants.slice());
  }

  updatedIngredient(index: number, newIngredients: Ingrediants){
    this.ingrediants[index] = newIngredients;
    this.ingrediantsChanged.next(this.ingrediants.slice());
  }

  deleteIngredient(index: number){
    this.ingrediants.splice(index,1);
    this.ingrediantsChanged.next(this.ingrediants.slice());
  }

}