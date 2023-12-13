import { Component } from '@angular/core';
import { FirebaseService } from '../services/firbase.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {

  products:any[]=[];

  constructor(private firebaseService:FirebaseService){}

  ngOnInit(): void {
    this.getFavorites();
  }

  async getFavorites() {
    const favorites = await this.firebaseService.getFavorites();
    this.products = favorites;
  }

  emittedId(emittedId: number) {
    this.products = this.products.filter((elm) => elm.id !== emittedId);
  }


}
