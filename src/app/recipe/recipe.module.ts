import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from '../app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { HeaderComponent } from '../header/header.component';
import { RecipeComponent } from '../recipe/recipe.component';
import { HttpClientModule } from '@angular/common/http';
import { StrToArrayPipe } from '../recipe/str-to-array.pipe';
import { AppRoutingModule } from '..//app-routing.module';
import { RecipesComponent } from '../recipe/recipes/recipes.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    RecipeComponent,
    StrToArrayPipe,
    RecipesComponent,
    RecipeDetailComponent
  ],
  imports: [
    CommonModule,
    CustomMaterialModule,
    RouterModule
  ]
})
export class RecipeModule { }
