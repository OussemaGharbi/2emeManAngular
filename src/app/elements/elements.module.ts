import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ElementsRoutingModule } from './elements-routing.module';

// Theme Elements
import { HomeSliderComponent } from './theme/home-slider/home-slider.component';
import { CategoryComponent } from './theme/category/category.component';
import { ServicesComponent } from './theme/services/services.component';
// Product Elements

@NgModule({
  declarations: [
    HomeSliderComponent,
    CategoryComponent,
    ServicesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ElementsRoutingModule
  ]
})
export class ElementsModule { }
