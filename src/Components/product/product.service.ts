import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './product';
import { products } from './productMock';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // getProducts(): Product[] {
  //   return products; //Mporei na argisei mporei na mhn erthei pote mporei kai na erthei
  // }

  getProducts():Observable<Product[]>{
    return of(products);
  }

  constructor() { };
}
