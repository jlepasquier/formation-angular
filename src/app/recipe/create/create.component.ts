import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from '../ingredient.model';
import { RecipeService } from '../recipe.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  recipeForm: FormGroup;

  constructor(private recipeService: RecipeService, private router: Router, private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {}

  createForm() {
    this.recipeForm = this.fb.group({
      name: ['', Validators.required ],
      picture: '',
      ingredientName: ''
    });
  }


  create() {
    const recipe = new Recipe();
      recipe.name = this.recipeForm.get('name').value;
      recipe.ingredients[0].name = this.recipeForm.get('ingredientName').value;
      recipe.picture = this.recipeForm.get('picture').value;
      recipe.name = this.recipeForm.get('name').value;

      console.log('this.recipeForm', this.recipeForm);

      this.recipeService.create(recipe).subscribe(() => this.router.navigate(['/recipes']));
  }



}
