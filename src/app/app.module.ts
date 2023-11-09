import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './MyComponents/navbar/navbar.component';
import { StoreComponent } from './MyComponents/store/store.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDescComponent } from './MyComponents/product-desc/product-desc.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { FormsModule } from '@angular/forms';
import { UsdToInrPipe } from './Pipes/usd-to-inr.pipe';
import { CartComponent } from './MyComponents/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StoreComponent,
    ProductDescComponent,
    HomeComponent,
    UsdToInrPipe,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
