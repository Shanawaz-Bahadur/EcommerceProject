import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './MyComponents/navbar/navbar.component';
import { StoreComponent } from './MyComponents/store/store.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDescComponent } from './MyComponents/product-desc/product-desc.component';
import { HomeComponent } from './MyComponents/home/home.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StoreComponent,
    ProductDescComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
