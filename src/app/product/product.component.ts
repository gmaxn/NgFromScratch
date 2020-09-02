import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  imageWidth: number = 100;
  imageMargin: number = 5;
  showImage: boolean = false;
  filterTerm: string = 'Cart';
  products: any[] = [
    {
      "productId": 1,
      "name": "Samsung Galaxy S20 Ultra",
      "code": "CEL-001",
      "releaseDate": "March 18, 2019",
      "price": 899.99,
      "stock": 10,
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTe6EIEuqMIN5i6DRh5hZnf4T9VQd_kTd303w&usqp=CAU"
    },
    {
      "productId": 2,
      "name": "IPhone 11 Pro",
      "code": "CEL-002",
      "releaseDate": "January 15, 2019",
      "price": 1199.95,
      "stock": 10,
      "imageUrl": "https://cdn.shopify.com/s/files/1/0423/0427/4589/products/Iphone-11pro2_f22990b2-ad6a-4685-a793-0d368fac1768_1024x1024@2x.png?v=1597821135"
    }
  ]

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

}
