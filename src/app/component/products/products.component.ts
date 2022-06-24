import { Component, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/Service/cart-service.service';
import { ProductFetchService } from 'src/app/Service/product-fetch.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  public productList : any ;
  constructor(private api : ProductFetchService, private cartService : CartServiceService) { }

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res =>{
      this.productList = res;
    })
  }
  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
}
