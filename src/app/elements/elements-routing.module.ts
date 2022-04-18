import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Theme Elements
import { HomeSliderComponent } from './theme/home-slider/home-slider.component';
import { CategoryComponent } from './theme/category/category.component';
import { ServicesComponent } from './theme/services/services.component';
// Product Elements

const routes: Routes = [

  
  { 
    path: 'theme/home-slider', 
    component: HomeSliderComponent 
  },
  { 
    path: 'theme/category', 
    component: CategoryComponent 
  },
  { 
    path: 'theme/services', 
    component: ServicesComponent 
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementsRoutingModule { }
