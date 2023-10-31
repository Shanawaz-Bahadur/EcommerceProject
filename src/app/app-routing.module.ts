import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { combineLatest } from 'rxjs';
import { ProductDescComponent } from './MyComponents/product-desc/product-desc.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { StoreComponent } from './MyComponents/store/store.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent
  },
  {
    path: "store", component: StoreComponent
  },
  {
    path: "store",
    children:[
      {
        path:'productDescription/:productId', component: ProductDescComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
