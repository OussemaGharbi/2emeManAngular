import { Component, OnInit } from '@angular/core';
import { Product } from '../../classes/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  public products: Product[] = [];
  public collapse: boolean = true;
  categories
  constructor(public productService: ProductService) { 
    this.productService.getProducts.subscribe(product => this.products = product);
    this.productService.getCategories().subscribe((result)=>{
      this.categories=result as []
      this.categories = this.categories.map((category)=>category.name);
    })  }

  ngOnInit(): void {
  }

  get filterbyCategory() {
    // const category = [...new Set(this.products.map(product => product.type))]
    return this.categories
  }

}
