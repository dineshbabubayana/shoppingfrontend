import { Component, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/Service/cart-service.service';
import { WishlistServiceService } from 'src/app/Service/wishlist-service.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  public products: any=[];
  constructor(private wishlist: WishlistServiceService, private cartService: CartServiceService) { }

  ngOnInit(): void {
    this.wishlist.getProduct().subscribe(res=>{
      this.products = res;
    })
  }

  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
}
