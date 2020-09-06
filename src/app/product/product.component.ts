import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  imageWidth: number = 100;
  imageMargin: number = 5;
  showImage: boolean = false;
  errorMessage: string;

  _filterTerm: string;

  get filterTerm(): string {
    return this._filterTerm;
  }

  set filterTerm(value: string) {
    this._filterTerm = value;
    this.filteredProducts = this.filterTerm ? this.performFilter(this._filterTerm) : this.products;
  }

  filteredProducts: IProduct[];
  products: IProduct[];

  constructor(private productService: ProductService) {
  }
  
  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: products => { 
        this.products = products;
        this.filteredProducts = this.products;
      }, 
      error: err => this.errorMessage = err
    });
  }

  onNotify(message: string): void {
    this.filterTerm = message;
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
