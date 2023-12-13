import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeRoutingModule } from './recipe-routing.module';
import { RecipeComponent } from './recipe.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [
    RecipeComponent,
    ProductCardComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    RecipeRoutingModule,
    MatPaginatorModule
  ],
  exports: [ProductCardComponent]
})
export class RecipeModule { }
