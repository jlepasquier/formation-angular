import { Pipe, PipeTransform } from '@angular/core';
import { Recipe } from './recipe.model';
import { isNullOrUndefined } from 'util';

@Pipe({
  name: 'sortCocktailsByName'
})
export class SortCocktailsByNamePipe implements PipeTransform {

  transform(value: Recipe[]): Recipe[] {
    if (isNullOrUndefined(value)) {
      return value;
    }
    return value.sort( (a, b) => {
      if (isNullOrUndefined(a) || isNullOrUndefined(a.name)) {
        return 1;
      }
      if (isNullOrUndefined(b) || isNullOrUndefined(b.name)) {
        return 1;
      }
      return a.name.localeCompare(b.name);
    });
  }

}
