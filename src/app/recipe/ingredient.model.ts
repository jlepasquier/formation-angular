export class Ingredient {
  ingredientId: number;
  name: string;
  quantity: number;
  recipeId: number;
  unit: string;

  constructor(ingredientId) {
    this.ingredientId = ingredientId;
  }
}
