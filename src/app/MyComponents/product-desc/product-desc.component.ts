import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreService } from 'src/app/Services/store.service';

@Component({
  selector: 'app-product-desc',
  templateUrl: './product-desc.component.html',
  styleUrls: ['./product-desc.component.css']
})
export class ProductDescComponent implements OnInit{

  productIDReceived:any;
  productDesc:any;
  favorite: boolean= false;
  cart: number = 0;
  constructor(private activatedRoute : ActivatedRoute, private productDetail : StoreService, private route: Router){}


  ngOnInit():void{
    let prodID = this.activatedRoute.snapshot.paramMap.get('productId')
    this.productIDReceived = prodID

    prodID && this.productDetail.getProductWithID(prodID).subscribe((data) => {
      this.productDesc = data
      console.log("constructor",data)
    })
  }

  checkRating(rate : number){
    return rate >= 5
  }

  toggleFavorite(){
    this.favorite = !this.favorite;
    // console.log(value.target.value)
  }

  updateCart(doNavigate: boolean){
    if(doNavigate){
      this.route.navigateByUrl('cart')
    }
    this.cart === 0 ? this.cart++ : this.cart--; 
  }




}
