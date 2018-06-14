import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
})
export class RecipeComponent implements OnInit {

  state = 'smaller';
  areIngredientsExpanded = false;

  @Input() recipe: Recipe;
  @Output() delete = new EventEmitter();

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
  }

  deleteRecipe() {
    this.delete.emit(this.recipe.id);
    this.recipeService.delete(this.recipe.id).subscribe();
  }
}
