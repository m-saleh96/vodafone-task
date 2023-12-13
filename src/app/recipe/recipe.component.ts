import { Component } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { FirebaseService } from '../services/firbase.service';
import { Recipe } from '../interfaces/recipe';
import { DocumentData } from 'firebase/firestore';
import { PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent {

  products:Recipe[]=[];
  favorites:DocumentData[]=[];


  length = 50;
  pageSize = 6;
  page = 0;

  searchItem:string='';

  pageSizeOptions = [6,9,12];

  constructor(private recipeService:RecipeService , private firebaseService:FirebaseService){}

  ngOnInit(): void {
    this.recipeService.value.subscribe(res=>{
      this.searchItem =res;
      this.getProducts();
    })
  }

  onPageChange(event:PageEvent){
    this.pageSize = event.pageSize;
      this.page = event.pageIndex;
      this.getProducts();
  }

  async getFavorites() {
    const favorites = await this.firebaseService.getFavorites();
    this.favorites = favorites;
  }

  getProducts(){
    this.recipeService.getProducts(this.searchItem, this.pageSize,this.page+1).subscribe(async (res:any)=>{
      this.products = res.results;
      await this.getFavorites();

      this.products.forEach((elm) => {
        elm.favorite = this.favorites.some((item) => item['id'] === elm.id && item['favorite']);
        return elm;
      });

      this.length=res.totalResults;
      this.pageSize=res.number;
    })
  }

}
