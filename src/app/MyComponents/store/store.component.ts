import { Component } from '@angular/core';
import { StoreService } from 'src/app/Services/store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {

  productDetail: any = {};
  constructor(private productsDetails: StoreService) {
    productsDetails.store().subscribe((data) => {
      this.productDetail = data
      console.log(data)
    })
  }

}
