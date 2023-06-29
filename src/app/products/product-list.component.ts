import { Component, OnDestroy, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';
import { Subscription } from 'rxjs';

@Component({
  styleUrls: ['./product-list.component.css'],
  templateUrl: './product-list.component.html'


})
export class ProductListComponent implements OnInit, OnDestroy{
  pageTitle = 'Product List';
  imageWidth = 50;
  imageMargin = 2;
  showImage: boolean = false;
  errorMessage: string = '';
  sub!: Subscription; 

private _listFilter: string = '';
get listFilter(): string {
    return this._listFilter;
}
set listFilter(value:string)
{
    this._listFilter=value;
    console.log('In setter:', value);
    this.filteredProducts = this.performFilter(value);
}

filteredProducts: IProduct[]=[];



  products: IProduct[] = [
    
  ];


constructor(private productService: ProductService)
{

}

  toggleImage(): void 
  {
    this.showImage = !this.showImage;
  }
  ngOnInit(): void {
    this.sub = this.productService.getProducts().subscribe({
        next: products => {this.products = products;
            this.filteredProducts= this.products;
        },

        error: err => this.errorMessage = err
      });
    
  }
  ngOnDestroy() {
      this.sub.unsubscribe();
  }

  performFilter(filterBy: string): IProduct[]
  {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct)=>
    product.productName.toLocaleLowerCase().includes(filterBy))
    
  }
  onRatingClicked(message: string): void{
    this.pageTitle = 'Product List: ' + message;
  }
}
