import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Recipe } from './recipe.model';
import { RECIPES } from './recipes.mock';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private _baseUrl = 'http://10.0.1.55:8080/api/v1/recipes';

  constructor(private http: HttpClient) { }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this._baseUrl);
  }

  getRecipeById(id: string): Observable<Recipe> {
    return this.http.get<Recipe>(`${this._baseUrl}/${id}`);
  }

  create(recipe: Recipe): Observable<any> {
    return this.http.post<Recipe>(this._baseUrl, recipe);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<Recipe>(`${this._baseUrl}/${id}`);
  }



}
