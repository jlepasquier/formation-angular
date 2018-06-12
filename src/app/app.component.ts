import { Component, OnInit } from '@angular/core';
import {RECIPES} from './recipe/recipes.mock';
import { RecipeService } from './recipe/recipe.service';
import { Recipe } from './recipe/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

}
