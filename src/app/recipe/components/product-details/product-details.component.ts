import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../../services/recipe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  id!:number;
  product!:any;

  constructor(private route:ActivatedRoute , private recipeService:RecipeService){}

  ngOnInit(): void {
    this.route.params.subscribe(params=>this.id=params['id']);
    this.recipeService.getById(this.id).subscribe((res:any)=>this.product = res);
  }
}
