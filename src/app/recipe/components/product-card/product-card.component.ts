import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../../../services/firbase.service';
import { Recipe } from 'src/app/interfaces/recipe';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product!:any;
  @Output() idEmitter =new EventEmitter<number>();
  myFavorites:Recipe[]=[];

  constructor(private router:Router, private firebaseService: FirebaseService){}

  redirectToDetails(id:number){
    this.router.navigate(['recipe' , id])
  }

  addToFavorite(item:any){
    if (item['favorite']) {
      item['favorite']= false;
      this.firebaseService.removeFromFavorites(item.id);
      this.emitId(item.id);
    } else{
      item['favorite']= true;
      this.myFavorites.push(item);
      this.firebaseService.saveArrayToFirebase(this.myFavorites);
    }
  }

  emitId(id:number) {
    this.idEmitter.emit(id);
  }
}
