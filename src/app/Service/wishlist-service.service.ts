import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistServiceService {

  public wishlist : any =[]
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");

  constructor(private http: HttpClient) { }
  getProduct(){
    return this.productList.asObservable();
  }

  setProduct(product : any){
    this.wishlist.push(...product);
    this.productList.next(product);
  }

  addtoWishList(product : any){
    this.wishlist.push(product);
    this.productList.next(this.wishlist);
    console.log(this.wishlist);
  }

  removeWishlistItem(product: any){
    this.wishlist.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.wishlist.splice(index,1);
      }
    })
    this.productList.next(this.wishlist);
  }

}
