import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, RouterLink } from '@angular/router';
import { RecipesComponent } from './recipe/recipes/recipes.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { CreateComponent } from './recipe/create/create.component';

const routes: Routes =  [
  {
    path: 'recipes',
    component: RecipesComponent
  },
  {
    path: 'recipes/create',
    component: CreateComponent
  },
  {
    path: 'recipes/:id',
    component: RecipeDetailComponent
  },
  {
    path: '**',
    redirectTo: 'recipes'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
