import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../../shared/classes/product';
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.scss']
})
export class ElectronicsComponent implements OnInit, OnDestroy {

  public themeLogo: string = 'assets/newlogo.png'; // Change Logo

  public products: Product[] = [];
  public productCollections: any[] = [];

  constructor(public productService: ProductService) {
    this.productService.getProducts.subscribe(response => {
      this.products = response.filter(item => item.type == 'electronics');
      // Get Product Collection
      this.products.filter((item) => {
        item.collection.filter((collection) => {
          const index = this.productCollections.indexOf(collection);
          if (index === -1) this.productCollections.push(collection);
        })
      })
    });
  }

  // Collection banner
  public collections = [{
    image: 'assets/images/collection/electronics/1.jpg',
    save: '10% off',
    title: 'speaker'
  }, {
    image: 'assets/images/collection/electronics/2.jpg',
    save: '10% off',
    title: 'earplug'
  },
  {
    image: 'assets/images/collection/electronics/3.jpg',
    save: '10% off',
    title: 'best deal'
  }]
  produits: []

  ngOnInit(): void {
    // Change color for this layout

    this.productService.getProduits().subscribe((result) => {
      console.log(result);

      this.produits = result as []
      console.log(this.produits);
    })
  }

  ngOnDestroy(): void {
    // Remove Color
    document.documentElement.style.removeProperty('--theme-deafult');
  }

  // Product Tab collection
  getCollectionProducts(collection) {
    return this.products.filter((item) => {
      if (item.collection.find(i => i === collection)) {
        return item
      }
    })
  }

}
