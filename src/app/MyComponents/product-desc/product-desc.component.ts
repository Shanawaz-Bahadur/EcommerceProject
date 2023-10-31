import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from 'src/app/Services/store.service';

@Component({
  selector: 'app-product-desc',
  templateUrl: './product-desc.component.html',
  styleUrls: ['./product-desc.component.css']
})
export class ProductDescComponent implements OnInit{

  productIDReceived:any;
  productDesc:any;
  constructor(private activatedRoute : ActivatedRoute, private productDetail : StoreService){}


  ngOnInit():void{
    let prodID = this.activatedRoute.snapshot.paramMap.get('productId')
    this.productIDReceived = prodID

    prodID && this.productDetail.getProductWithID(prodID).subscribe((data) => {
      this.productDesc = data
      console.log("constructor",data)
    })
  }



}
