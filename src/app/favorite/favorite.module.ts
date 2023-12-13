import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoriteRoutingModule } from './favorite-routing.module';
import { FavoriteComponent } from './favorite.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RecipeModule } from '../recipe/recipe.module';


@NgModule({
  declarations: [
    FavoriteComponent
  ],
  imports: [
    CommonModule,
    FavoriteRoutingModule,
    MatPaginatorModule,
    RecipeModule
  ]
})
export class FavoriteModule { }
