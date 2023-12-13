import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders  } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  // apikey:string = '8f7bd022b91b4fcf9f474ae5358ff597';
  apikey:string = '116ce63604e24f1caf080028869ad81b';
  // apikey:string = '4b44e7bf0f5e4109ad6e0a62cf0f6bf7';

  constructor(private http:HttpClient) { }


  private searchItem = new BehaviorSubject('');
  value = this.searchItem.asObservable();

  search(value:string){
    this.searchItem.next(value);
  }


  getProducts(type:string,items:number,page:number){
    return this.http.get(`${environment.apiURL}/recipes/complexSearch?query=${type}&number=${items}&apiKey=${this.apikey}&offset=${page}`);
  }

  getById(id:number){
    return this.http.get(`${environment.apiURL}/recipes/${id}/information?apiKey=${this.apikey}`);
  }
}
