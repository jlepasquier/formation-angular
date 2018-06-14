import { SortCocktailsByNamePipe } from './sort-cocktails-by-name.pipe';

describe('SortCocktailsByNamePipe', () => {
  it('create an instance', () => {
    const pipe = new SortCocktailsByNamePipe();
    expect(pipe).toBeTruthy();
  });
});
