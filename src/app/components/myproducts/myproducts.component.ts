import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

import * as _ from 'lodash'
import { ProductService } from 'src/app/shared/services/product.service';


@Component({
  selector: 'app-myproducts',
  templateUrl: './myproducts.component.html',
  styleUrls: ['./myproducts.component.scss']
})
export class MyproductsComponent implements OnInit {
  public grid: string = 'col-xl-3 col-md-6';
  public layoutView: string = 'grid-view';
  public all_products: any[] = [];
  public products: any[] = [];
  public brands: any[] = [];
  public colors: any[] = [];
  public size: any[] = [];
  public minPrice: number = 0;
  public maxPrice: number = 1200;
  public tags: any[] = [];
  public category: string;
  public pageNo: number = 1;
  public paginate: any = {}; // Pagination use only
  public sortBy: string; // Sorting Order
  public mobileSidebar: boolean = false;
  public loader: boolean = true;
  public finished: boolean = false  // boolean when end of data is reached
  public addItemCount = 8;

  constructor(private router: Router,
    private viewScroller: ViewportScroller, public productService: ProductService) {   
      
  }

  produits = []
  ngOnInit(): void {

    this.productService.getUserProducts().subscribe(result=>{
      this.produits = result as []
      console.log(this.produits)
    })


  }

  addItems() {
    if(this.all_products.length == this.products.length){
      this.finished = true;
      return
    }
    this.products = this.all_products.slice(0, this.addItemCount);
  }

  // Infinite scroll
  public onScroll() {
    // add another items
    this.addItemCount += 8;
    this.addItems();
  }



  

  // Change Grid Layout
  updateGridLayout(value: string) {
    this.grid = value;
  }

  // Change Layout View
  updateLayoutView(value: string) {
    this.layoutView = value;
    if(value == 'list-view')
      this.grid = 'col-lg-12';
    else
      this.grid = 'col-xl-3 col-md-6';
  }

  // Mobile sidebar
  toggleMobileSidebar() {
    this.mobileSidebar = !this.mobileSidebar;
  }

  deleteProduct(id: string) {
    this.produits = this.produits.filter(val => val._id !== id);
  }
  editProduct(id: string) {
    console.log("received "+id);
    this.produits;
  }


}


