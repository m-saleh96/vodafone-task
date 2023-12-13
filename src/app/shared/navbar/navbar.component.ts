import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  searchTerm: string = '';

  constructor(private recipeService:RecipeService , private route:Router){}

  search(){
    this.route.navigate(['home']);
    this.recipeService.search(this.searchTerm);
  }

}
