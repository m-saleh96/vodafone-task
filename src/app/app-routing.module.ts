import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./recipe/recipe.module').then(m => m.RecipeModule) },
  { path: 'favorite', loadChildren: () => import('./favorite/favorite.module').then(m => m.FavoriteModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
