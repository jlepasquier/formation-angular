import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  areIngredientsExpanded = false;

  @Input() recipe: Recipe;
  constructor() {}

  ngOnInit() {
  }

  toggleIngredients() {
    this.areIngredientsExpanded = !this.areIngredientsExpanded;
  }

}
