import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';

// Pages Components
import { WishlistComponent } from './account/wishlist/wishlist.component';
import { CartComponent } from './account/cart/cart.component';
import { DashboardComponent } from './account/dashboard/dashboard.component';
import { ProfileComponent } from './account/profile/profile.component';
import { ContactComponent } from './account/contact/contact.component';
import { CheckoutComponent } from './account/checkout/checkout.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TypographyComponent } from './typography/typography.component';
import { ReviewComponent } from './review/review.component';
import { OrderSuccessComponent } from './order-success/order-success.component';

import { CollectionComponent } from './collection/collection.component';
import { ErrorComponent } from './error/error.component';
// Blog Components
// Portfolio Components

@NgModule({
  declarations: [
    WishlistComponent,
    CartComponent,
    DashboardComponent,

    ProfileComponent,
    ContactComponent,
    CheckoutComponent,
    AboutUsComponent,
    TypographyComponent,
    ReviewComponent,
    OrderSuccessComponent,

    CollectionComponent,
    ErrorComponent,
   
  ],
  imports: [
    CommonModule,
    GalleryModule.forRoot(),
    SharedModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
