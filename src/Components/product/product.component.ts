import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products!:Product[];


  constructor(private service:ProductService) {

  }

  ngOnInit(): void {
    // this.products=this.service.getProducts(); //an den erthoun tha parei undefined
    this.service.getProducts().subscribe(MitsosObjects=>this.products=MitsosObjects);
  }
}
