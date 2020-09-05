import { Component } from '@angular/core';
import { IProduct } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  imageWidth: number = 100;
  imageMargin: number = 5;
  showImage: boolean = false;
  
  _filterTerm: string = 'Cart';
  
  get filterTerm(): string {
    return this._filterTerm;
  }
  
  set filterTerm(value: string) {
    this._filterTerm = value;
    this.filteredProducts = this.filterTerm ? this.performFilter(this._filterTerm) : this.products;
  }
  
  filteredProducts: IProduct[];
  products: IProduct[] = [
    {
      "productId": 1,
      "productName": "Samsung Galaxy S20 Ultra",
      "productCode": "CEL-001",
      "releaseDate": "March 18, 2019",
      "price": 899.99,
      "stock": 10,
      "rating": 4.7,
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTe6EIEuqMIN5i6DRh5hZnf4T9VQd_kTd303w&usqp=CAU"
    },
    {
      "productId": 2,
      "productName": "IPhone 11 Pro",
      "productCode": "CEL-002",
      "releaseDate": "January 15, 2019",
      "price": 1199.95,
      "rating": 4,
      "stock": 10,
      "imageUrl": "https://cdn.shopify.com/s/files/1/0423/0427/4589/products/Iphone-11pro2_f22990b2-ad6a-4685-a793-0d368fac1768_1024x1024@2x.png?v=1597821135"
    }
  ]

  constructor() {
    this.filteredProducts = this.products;
    this._filterTerm = 'Cart';
  }
  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) => 
           product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  
}
