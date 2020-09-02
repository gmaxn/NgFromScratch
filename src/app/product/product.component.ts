import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  filterTerm: string = 'Cart';
  products: any[] = [
    // {
    //   "productId": 1,
    //   "name": "Samsung Galaxy S20 Ultra",
    //   "code": "CEL-001",
    //   "releaseDate": "March 18, 2019",
    //   "price": 899.99,
    //   "stock": 10,
    // },
    // {
    //   "productId": 2,
    //   "name": "IPhone 11 Pro",
    //   "code": "CEL-002",
    //   "releaseDate": "January 15, 2019",
    //   "price": 1199.95,
    //   "stock": 10,
    // }
  ]
}
