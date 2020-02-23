import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import { HomeComponent } from './Home/home.component';
import { AboutComponent } from './About/about.component';
import { ShopComponent } from './Shop/shop.component';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './Product/product.component';
import { CartComponent } from './Cart/cart.component';


const route = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'shop/:id', component: ShopComponent},
  {path: 'shop/product/:id', component: ProductComponent},
  {path: 'cart', component: CartComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ShopComponent,
    ProductComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      route,
      { enableTracing: true } // <-- debugging purposes only
    ),
    Ng2PageScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
