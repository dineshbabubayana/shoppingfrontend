import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { LoginRegisterationComponent } from './component/login-registeration/login-registeration.component';
import { ProductsComponent } from './component/products/products.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';

const routes: Routes = [
  {path:'', redirectTo:'products',pathMatch:'full'},
  {path:'products', component: ProductsComponent},
  {path:'cart', component: CartComponent},
  {path:'loginRegistration', component:LoginRegisterationComponent},
  {path:'wishlist', component:WishlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
